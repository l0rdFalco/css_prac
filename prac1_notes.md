## css prac 1

html is a _markup_ language because everything is encapsulated in elements or tags
these tags instruct the browse on what to do with the content in between the opening and closing tag

**types of tags**

1. single tags e.g meta, br hr img
2. double tags e.g html

the doctype tag declares what version of html is being used

the html tag is the **root element** because all other code goes in between the html tags

the head tag houses metadata that helps the webpage work but isn't visible to the user

the body tag houses all the content of the webpage that the use interacts with e.g text, media, scripts etc

the br tag is used to break a text into separate lines

a selector in css is the element name e.g body, div, p. The selector tells the browser what element to change with the k:v pairs in the {}

the 4 different parts of a box model include:

1. content
2. padding
3. margin
4. border

**div, header, nav, aside, footer, section and span** tags dont make any visual changes to a webpage unless when used with CSS

each html element layers all its children

pseudo classes are inbuilt css classes that are used to define some special state. some of them include:

1. hover
2. visited
3. link
4. active
5. first-letter
6. fist-child
7. first-line etc

nth child class allows us to style every other element

older chrome and safari versions used webkit in css e.g -webkit-border-top-left-radius: 10px;

older firefox and safari versions used moz in css e.g -moz-border-top-left-radius: 10px;

the \* css selector selects all the elements in a webpage

_block level elements_ typically start on a new line and take up the full width avaiable in their container. This means that they stack vertically and can be individually styled

margin: 10px auto means that make margin-top and margin-bottom 10px and margin-left and margin-right as automatic. automtic makes the rest of the space after the width become the margin

**border-collapse: collapse;** on the table css selector makes table have a single line aside from the double lines with border=1

## FLEXBOX

the flexible box module is a one dimensional layout mode that makes it easy to:

- design flexible and efficient layouyts
- distribute space among elements
- control alignment in a given parent element

b4 flexbox there were other layout modes:

1. block: for sections in a webpage
2. inline: for text
3. table: for 2d table data
4. positioned: for explicit positioning of an element
5. grid
6. container queries
7. subgrids/nested grids
8. floats
9. multicolum layout

flexbox was designed to provide the flexibility absent in the aforementioned

- _flex container_ : the parent element
- _flex items_ : the children elements

- _main axis_ : left to right
- _main start_: starting point of main axis
- _main end_ : end point of main axis
- _main size_ : length from main start to main end

- _cross axis_ : top to bottom
- _cross start_: starting point of cross axis
- _cross end_ : end point of cross axis
- _cross size_ : length from cross start to cross end

## 1. flex container properties

1. _display_ : flexbox cannot work without it as it defines a container
2. _flex-direction_ : defines the direction in which flex items are placed in the container
3. _flex-wrap_ : used to control the wrapping of items within a container
4. _flex-flow_ : combination of flex direction and flex wrap
5. _justify-content_ : determines alignment of items along the main axis
6. _align-items_ : defines how flex items are laid out along cross axis. only works with dealing with a single line
7. _align-content_ : determines alignment of items along the cross axis. works when dealing with when multiple rows and flex-wrap: wrap;

### 2. display

Makes a block level or inline level flex container depending on the value entered.
having _display: flex;_ on the flex container aligns the flex items left to right.

the flex container has 100% width meaning that it behaves similar to a block level element.

setting display:inline-flex makes the flex container **NOT** a block level element. It then takes up just enough width to display its children

**NB:** if the display property isn't set, none of the other flexbox properties will work

### 3. flex-direction

sets the direction of the main axis which inturn determines how the flex items are placed within the flex container.
By default the main axis flows left to right.

The values for flex-direction include:

- row: default value. causes main axis to flow left to right
- row-reverse: causes main axis to flow right to left
- column. causes main axis to flow top to botton
- column-reverse: causes main axis to bottom to top

### 4. flex-wrap

controls the wrapping of flex items within the flex container

by default, all flex items will try to fit in a single line and overflow if space runs out.

flex-wrap allows flex items to flow to a new line instead of overflowing out of sight

the values of flex-srap include:

- nowrap: default value
- wrap:
- wrap-reverse:

### 5. flex-flow

this is a shorthand property for flex-direction and flex-wrap
the default setting is flex-flow: row nowrap; the values can be changed accordingly

### 6. justify-content

Defines alignment along the main axis depending on the value of flex-direction.
The values expected include:

- flex-start: default value. places flex items at _the BEGINNING of the main axis_ .
- flex-end: places flex items at _the END of the main axis_.
- center: places flex items at _the CENTER of the main axis_.

there are also other values that determine how space between flex items is distributed. they include:

- **space-between**: remaining space is divided evenly between flex items.
- **space-around**: remaining space is divided evenly between flex items including before and after fist and last items respectively. the spaces before and after is equal to have the space between items.
- **space-evenly**: remaining space is divided evenly between flex items including before and after. all spaces are equal.

### 7. align-items

works when flex-direction:column and determines alignment of items in the cross axis.

- **stretch**:default value. Flex items stretch the entire length of the other axis depending on value of flex-direction
- **baseline**: lines up all the text in a flex item
  values are the same as those in justify content.

### 8. align-content

determines alignment of items in the cross axis and multiple rows must exist in the flex container
and flex-wrap must be included
values are all the same as in align-items

## 1. flex item properties

1. _order_: controls the order in which the item appears in the flex container.
2. _flex-grow_: allows a flex item to grow if necessary
3. _flex-shrink_: allows a flex item to shrink if necessary
4. _flex-basis_: specifies the initial main size of a flex item
5. _flex_: shorthand for flex-grow, flex-shrink and flex-basis
6. _align-self_: allows alignment of individual flex items

### 1. order

all flex items have order:0; as the default and can have both negative and positive integer values.

Order:0; items come first and them the rest are arranged in ascending order. the value of flex-direction in the flex-container also comes to play

### 1. flex-grow

determines the amount of space the flex item should take up in the flex container if necessary.

It is relative to the size of the other flex items in the container

all items have flex-grow:0; as the default. It only takes posive int and decimal values.

setting flex-grow:1; allows remaining space to be distributed evenly among flex items

### 2. flex-shrink

provides the ability of a flex item to shrink if necessary

flex-shrink:1; is the default value for a flex item and is relative to the other items in the container. This is why items shrink to to fit inside a container if screen size is decreased

when flex-shrink:0; flex items dont shrink any more; they just immediately overflow

to control shinking for individual items, add a positive value to flex-shrink on the said item class.
the value determines the amount of shrinkage relative to the others

**NB: flex-grow and flex-shrink can determine what parts of a webpage grow or shrink based on importance and screen size**

### 4. flex-basis

determines the initial size of a flex item in a container before extra space is distributed with flex-grow
it is used in place of the _width_ property in flex layouts.

1t can accept values in percentages, pixels, rems. ems and keywords like auto

flex-basis:auto; is the default and sets the width of the flex item based on the content. ie the width of the flex item is dependent on the text inside.

flex-basis, flex-grow and flex-shrink are independent of each other

### 6. align-self

controls alignment of individual flex items.

the values are the same as those in align-items property in flex containers

when specified, it always overrides the align-items value in the flex container

## flexbox exercises

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills#task_1

https://eneax.github.io/learn-flexbox/
