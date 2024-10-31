<?php
namespace PetManagement;

require_once 'traits/SoundTrait.php';

use PetManagement\Traits\SoundTrait;

class Dog extends Animal {
    use SoundTrait;

    // Implementasi abstract method
    public function makeSound() {
        return $this->sound("Guk guk!");
    }
}
?>
