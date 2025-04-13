<!-- routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Task from '$lib/components/Task.svelte';
  
  let tasks = [];
  let newTaskTitle = '';
  let isLoaded = false;
  
  // Carica i task dal localStorage all'avvio
  onMount(() => {
    if (browser) {
      console.log('Caricamento da localStorage...');
      const savedTasks = localStorage.getItem('tasks');
      console.log('Dati trovati:', savedTasks);
      
      if (savedTasks) {
        try {
          tasks = JSON.parse(savedTasks);
          console.log('Tasks caricati con successo:', tasks);
        } catch (e) {
          console.error('Errore nel parsing dei task salvati:', e);
          tasks = [];
        }
      }
      
      isLoaded = true;
    }
  });
  
  // Salva i task nel localStorage solo dopo che sono stati caricati inizialmente
  $: {
    if (browser && isLoaded) {
      console.log('Salvataggio in localStorage:', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  
  function addTask() {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        content: '',
        completed: false
      };
      
      tasks = [...tasks, newTask];
      newTaskTitle = '';
    }
  }
  
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
  }
  
  function updateTask(e) {
    const updatedTask = e.detail;
    tasks = tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
  }
</script>

<svelte:head>
  <title>SvelteKit TaskOnfly beta</title>
</svelte:head>

<main>
  <h1>My To Do List</h1>
  
  <div class="add-task">
    <input 
      type="text" 
      bind:value={newTaskTitle} 
      placeholder="Aggiungi un nuovo task..."
      on:keydown={e => e.key === 'Enter' && addTask()}
    />
    <button on:click={addTask}>Aggiungi</button>
  </div>
  
  <div class="tasks-container">
    {#if tasks.length === 0}
      <p class="empty-state">Nessuna attività. Aggiungine una!</p>
    {:else}
      {#each tasks as task (task.id)}
        <Task 
          {task}
          on:delete={() => deleteTask(task.id)} 
          on:update={updateTask}
        />
      {/each}
    {/if}
  </div>
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
		color: var(--text);
		text-shadow: 0 0 5px #00fafa;
  }
  
  .add-task {
    display: flex;
		margin-bottom: 20px;
		gap: 10px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    font-size: 20px;
    border: 1px solid var(--border);
    border-radius: 4px 0 0 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .empty-state {
    text-align: center;
    color: #888;
    font-style: italic;
  }
  
  .tasks-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
