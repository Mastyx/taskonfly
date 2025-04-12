<!-- lib/components/Task.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  
  export let task;
  
  const dispatch = createEventDispatcher();
  
  let isEditing = false;
  let editedTitle = task.title;
  let editedContent = task.content;
  
  function toggleComplete() {
    // Invece di modificare direttamente task.completed, emetti un evento
    dispatch('update', {
      ...task,
      completed: !task.completed
    });
  }
  
  function deleteTask() {
    dispatch('delete');
  }
  
  function startEditing() {
    isEditing = true;
    editedTitle = task.title;
    editedContent = task.content;
  }
  
  function saveChanges() {
    if (editedTitle.trim()) {
      // Invece di modificare direttamente l'oggetto task, emetti un evento
      dispatch('update', {
        ...task,
        title: editedTitle,
        content: editedContent
      });
      isEditing = false;
    }
  }
  
  function cancelEditing() {
    isEditing = false;
  }
</script>

<div class="task" class:completed={task.completed}>
  {#if isEditing}
    <div class="task-edit">
      <input 
        type="text" 
        bind:value={editedTitle} 
        placeholder="Titolo attività"
      />
      <textarea 
        bind:value={editedContent} 
        placeholder="Aggiungi dettagli o note..."
        rows="3"
      ></textarea>
      <div class="edit-buttons">
        <button class="save" on:click={saveChanges}>Salva</button>
        <button class="cancel" on:click={cancelEditing}>Annulla</button>
      </div>
    </div>
  {:else}
    <div class="task-display">
      <div class="task-header">
        <label class="checkbox-container">
          <input type="checkbox" checked={task.completed} on:change={toggleComplete} />
          <span class="checkmark"></span>
        </label>
        <h3 class:strike={task.completed}>{task.title}</h3>
        <div class="task-actions">
          <button class="edit" on:click={startEditing}>Modifica</button>
          <button class="delete" on:click={deleteTask}>Elimina</button>
        </div>
      </div>
      {#if task.content}
        <div class="task-content">
          <p>{task.content}</p>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .task {
    background-color: white;
    border-radius: 4px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  
  .completed {
    opacity: 0.7;
    background-color: #f9f9f9;
  }
  
  .task-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  h3 {
    margin: 0;
    flex: 1;
    overflow-wrap: break-word;
  }
  
  .strike {
    text-decoration: line-through;
    color: #999;
  }
  
  .task-actions {
    display: flex;
    gap: 5px;
  }
  
  .task-content {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
    color: #666;
    white-space: pre-wrap;
  }
  
  .task-edit {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  textarea {
    resize: vertical;
    padding: 8px;
    font-family: inherit;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .edit-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
  }
  
  button.edit {
    background-color: #2196F3;
    color: white;
  }
  
  button.delete {
    background-color: #f44336;
    color: white;
  }
  
  button.save {
    background-color: #4CAF50;
    color: white;
  }
  
  button.cancel {
    background-color: #ccc;
    color: #333;
  }
  
  /* Checkbox styling */
  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 25px;
    cursor: pointer;
  }
  
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 3px;
  }
  
  .checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .checkbox-container input:checked ~ .checkmark {
    background-color: #4CAF50;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .checkbox-container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>
