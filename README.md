# Mars Rover 

## Introduction

This is a small application based on a rover moving around a plateau.

After inputting the initial size of the plateau and initial co-ordinates
of your Mars rover, the application accepts inputs to move the rover around
the array as well as dropping new rovers and switching between them.

## Creating the application

After forking and cloning this repository, you can run the command:

npm install

Followed by:

npm start

'Ctrl + C' can be used to kill the program at any time. This is currently
required at the end to exit until a more graceful exit is added in future.

## Commands

Upon first running, you will be asked to input the size of the array.

This is given in the form: 'X Y' where 'X' & 'Y' are numbers seperated by a 
space.

Following this you will be asked to create your first rover.
The first input for this will be your chosen name for your rover, followed
by it's initial location and faced direction.
This input is given in the format 'X Y D', where 'D' is a direction which can
be the following values: 'N', 'E', 'S' or 'W'

Your rover can then be moved with various inputs, these are as follows:

A string containing any number of 'L', 'R' and 'M'. These refer to rotating
your rover left, right and moving forwards one space respectively.

A single 'D'. This brings up the new rover inputs as before and allows you to
create a new rover.

A single 'S'. This shows a further input to allow you to switch between existing
rovers.

A single '?'. This shows a helps dialogue describing these inputs again.

A single 'Q'. This ends the program and outputs the final locations of all rovers.