document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Membuat elemen tugas
        const newTaskElement = createTaskElement(taskText);
        taskList.insertBefore(newTaskElement, taskList.firstChild);

        taskInput.value = ""; // Mengosongkan kolom input
    } else {
        // Menampilkan alert jika input kosong
        alert("Silakan masukkan tugas sebelum menambah.");
    }
});

// Fungsi untuk membuat elemen tugas
function createTaskElement(taskText) {
    const li = document.createElement("li");

    // Membuat elemen span untuk teks tugas
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text"); // Menambahkan kelas untuk styling
    li.appendChild(taskSpan);

    // Membuat kontainer untuk tombol
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Membuat tombol edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function() {
        const newTaskText = prompt("Edit tugas Anda:", taskText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskSpan.textContent = newTaskText.trim(); // Memperbarui teks tugas
        }
    };
    buttonContainer.appendChild(editBtn); // Menambahkan tombol edit ke kontainer tombol

    // Membuat tombol delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        // Menampilkan konfirmasi sebelum menghapus
        const confirmDelete = confirm("Apakah Anda yakin ingin menghapus tugas ini?");
        if (confirmDelete) {
            li.remove(); // Menghapus tugas jika konfirmasi adalah true
        }
    };
    buttonContainer.appendChild(deleteBtn); // Menambahkan tombol delete ke kontainer tombol

    li.appendChild(buttonContainer); // Menambahkan kontainer tombol ke li

    return li;
}
