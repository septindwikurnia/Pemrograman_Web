<?php
namespace PetManagement;

abstract class Animal {
    protected $name;
    protected $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    // Abstract method yang harus diimplementasikan oleh kelas turunan
    abstract public function makeSound();

    public function getInfo() {
        return "Nama: {$this->name}, Umur: {$this->age} tahun";
    }
}
?>
