<?php
require_once 'Animal.php';
require_once 'Dog.php';
require_once 'Cat.php';

use PetManagement\Dog;
use PetManagement\Cat;

$dog = new Dog("Buddy", 3);
echo $dog->getInfo() . "<br>";
echo $dog->makeSound() . "<br>";

$cat = new Cat("Kitty", 2);
echo $cat->getInfo() . "<br>";
echo $cat->makeSound() . "<br>";
?>
