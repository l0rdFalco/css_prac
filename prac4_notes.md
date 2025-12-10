working thru: https://www.youtube.com/watch?v=-G-zic_LS0A

CSS stands for cascading style sheets
cascasing - how to style an element when several rules apply
style - points to the various styles that can b applied to the html elements
sheets - the actual documents with the .css file format

### CSS BOX MODEL

CSS views every html element as if it has an invisible box around it
these invisible boxes will either be block or inline since all html elements are either a block or inline element
_block elements_ always start on a new line and take up the full page width e.g div, li
_inline elements_ dont start on a new line unless they are after a block element. They occupy the width of their content e.g span, img etc
with css, think in terms of block and inline elements

### CSS properties

this is the k:v pairs that are used to style the html
CSS properties can either style:

- the box itself e.g. background color, border
- the content inside the box e.g. font size, color
- layout ie. where the boxes go on the page e.g flexbox, grid, position

### CSS rules

A CSS rule is in the form:
selector {
property: value;
property: value;
property: value;
declaration
}

a selector selects the html element we want to style e.g element selector
a property-value pair is also called a _declaration_
multiple declaratons inside curly brackets is called a _declaration block_

### including CSS

The three ways of including css are inline CSS, internal CSS and external CSS
Inline css is applied directory to a HTML element using the style attribute
internal css styles a single html document using the style element

### CSS Text properties

The various ways of text syling inclide
font-weight: sets the thickness of text characters. The values range from 100 to 900
text-decoration: sets decorative lines on text
font-style: sets the style of a font
text-transform: sets the capitalisation of text
list-style: sets the syle of a list
text-align: specifies horizontal alignment with text within an element
line-height: sets height of text and is used to set the distance between many lines of text
letter-spacing: sets horizontal spacing between characters
font-size: sets the size of the text
font-family: sets a prioritised list of font names or font categories
color: used for specifying the color of text
background-color: used to specify the color of the background

_absolute units_: the size is fixed and thus not affected by screen size or parent elements e.g px, pt, in, cm. mm

_relative units_: sizes depend on sizes of parent elements and adjusts proportionally to changes in the parent element. They include %, rem, em, vh, vw

a pixel is a single point of light(tiny dot of color) on a digital display. A single pixel has a length of 1/96 inches
a single pixel is made up of red green and blue panels with adjustable intensities. The small size means that the eye morphs the three colors to the visible one

color values can be represented in either RGB or hexadecimal notation.
the hexadecimal notation is in the form #pair1pair2pair3 e.g #9874f9
when the hex pairs are identical, they can be shorted ny omitting the parter e.g #AF4

when all three channels of rgb are set to the same value, we get a shade of grey

a typeface is a synonym of 'font'. Typefaces are organized into the following groups:

- serif: these have extra details on the end of strokes
- san-serif: have straight ends and are much cleaner
- monospace: each letter takes up equal space
- cursive: they have joining strokes and/or mimic handwriting
- display: they are attention grabbing and more artistic in nature

color in css is subdivided into named colors, color systems, color palettes and the color property

color systems are a structured methof for creating different colors using a set of primary colors and rules for mixing them. The two main systems are _substractive_ and _additive_

_opencolor_, _tailwindcolors_, _coolors.co_ are resources to help choose a grey color as well as primary, secondary and tertiary colors

_subtractive color systems_ are used in printing and painting CMY
_additive color systems_ are used in electronic displays RGB

#### text guidance

headings should be between 500 to 900
normal text should be between 300 to 400
its best practice to set font-weight
always remove underline from anchor tags
its better to use sentence case in most situations
set list-style to none when they are used for structural purpose e.g the nav bar
line-height on headings should always be less than 1.5, and 1.5 - 2 for normal text
negative letter-spacing values can tighten up large text
regular text shold be 16px - 32px. Headings can be greater then 60px
use a type-scale that provides a structured hierarchy of font sizes to create consistency.
use typescale.com to calculate these values
pick a popular san-serif font especially for tech-based apps
have at least 2 colors in your color palette, a primary color and a grey color
primary colors are used to highlight important parts of a page. The corresponding tints and shades can be used to create contrasts

### CSS selectors

The main types of selectors are type, id, class and pseudo-class
The types of selectors include:

1. basic selectors: they include element selectors, ids and classes
2. combinator selectors: where a selector combines 2 basic selectors eg ul > li
3. pseudo-class selectors: these apply when a given state is met e.g a:hover
4. pseudo-element selectors: these target a specific part of an element e.g ::before

## type/element selector

this selects elements based in the tag name. It is used when targeting a specific HTML element

The type selector is used for setting global styles to ensure consistency

## id selector

selects an element based on a unique id html attribute and can only be used once

## class selector

selects one or more elements based on the html class attribute that can be used multiple times
these are preferred over ids because of greater flexibility and reusability
it is common to use type selectors for global styling and class selectors for more specific styling
classes for components(a resuable piece of a UI) are designed to be combined on a single html element for a modular approach to styling
it is best to first create a class that sets the structure of the component and a subsequent classes that set the unique styling

## the cascade

this is where styles declared later take priority in the event of conflicting selectors/styles
a stylesheet is dynamic in that styles targeting the same element applied later overrides those applied earlier
the cascade also works with entire stylesheets, not just styles

## grouping selectors

this is where selectors are comma separated to share a declaration block

### pseudo classes

The three types to be discussed include pseudo-classes, state pseudo-classes and conditional pseudo-classes

these define styles for a specific state or condition of a html element
examples of state can he selected or not,
examples of condition can be odd or even rows on a table

in css, a pseudo-class is repesented as a colon keyword at the end of a selector e.g a:hover

### state pseudo-clases

are important for dymanic styling based on user interactions. They are commonly used for hyperlinks

the main pseudo-classes used for hyperlinks include:
:link - targets hyperlinks that havent been clicked
:visited - targets hyperlinks that have been clicked
:hover - targets an element when the cursor is placed over it
:active - targets an element when it is being clicked

_:link and :visited_ are specific to anchor tags
_:hover and :active_ aren't specific to anchor tags

### conditional pseudo-classes

this are used in styling based in an element's position in relation to other elements e.g :first-child, nth-child(n) etc

### combinator selectors

these combine 2 or more selectors to target elements baed on thier positions relative to each other.
The 4 subtypes include

1. descendant/child selector e.g. parent child
2. direct descendant/child selector e.g parent > child
3. adjascent sibling selector e.g parent + child
4. general sibling selector e.g. parent ~ child

### descendant/child selector

this targets all children elements of a parent. This means all children and grandchildren.
The parent and child can be any of the CSS selectors known

### direct descendant selector

this targets direct children elements of the parent. Ignores grandchildren.

### adjacent sibling selector

this targets an element directly after another element both nested within the same parent e.g h1 + p

the first selector, h1 in this case, is called the _preceding sibling_
the second selector, p in this case, is called the _adjasent siblinng_

### general sibling selector

this targets multiple elements directly after another element both nested within the same parent e.g. h1 ~ p
the first selector, h1 in this case, is called the _preceding sibling_
the second selector, p in this case, is called the _subsequent siblinngs_

### SPECIFICITY

the cascade is where styles declared later will take priority when selectors are the same

when styles are applied to the same element using a a different type of selector, the final outcome is determined by specificity

specificity determines the priority of a css rule when multiple rules apply to the same element

specificity calculators are at times used to find out which styles are applied

It is common to use the type selector for global styles and the class selector to override the aforementioned for more specific styling

### INHERITANCE

properties set on parent elements are passed to their children by default

specific selectors will override inherited styles. This is because inherited styles have a very low specificity

it is mainly text properties that are inherited. e.g color, font, font-family, font-size, font-style. A complete list is a deepseek question away

global font styles are set on the body element so that all child text elements inherit said styles by default

inheritance is also used for a container that requires specific text styling

we have already seen that text-align affects block-level elements and has no impact on inline-level elements.

when appling the text-align property on a block level parent e.g. a div that contains inline elements e.g img, all the children will be centered.
This is because the block level children will not move since they already occupy the full width
the inline-level elements will be centered because there's is space for them to move

secondly since the text-align element is inherited by the children, the text is centered in the block level elements. text inside the inline-level element stays where it is since there is no space to move

the universal selector is primarily used for setting default properties and not for applying styling

### pseudo-elements

these are used to style specific parts of an element. It is made up of a double colon after a selector

pseudo-elements for text styling. They include:
::first-letter - used to create a drop cap
::first-line
::selection - used to enhance the text a user selects

pseudo-elements for content insertion. used for adding decorative elements without alterting html structure. They include:
::before - adds insertaion before the targeted element
::after - adds insertion after the targeted element

### CSS BOX MODEL

All html elements are treated as rectangular boxes. EACH box has it's own set of properties which include:
content, border, padding, margin, height, width.

the background-color property sets the background color of an element and applies it to the content and padding. It is sometimes used to set the background color of an entire page or of page sections.
It is not to be confused with the color property which applies to text elements

by default, block level elements are just big enough to fit its contents vertically and stretches full width horizontally

by default, inline-level elements are just big enough to fit its contents vertically and horizontally

default box dimensions can be overriden by the width and height properties

for _h1, p, ul and li elements_, the height isn't explicitly set; it is determined by font size, padding and margin values
the width is also not set because as block-level elements, they stretch to fill the parent container

for container elements _like div and section_, the height is not usually set; the contents determine it.
the width can be set depending on the layout

width and height can be set on _some_ inline elements but not others. The ones that can get the height declaration inclide _img, input, select, textarea and button_

elements where you can't apply height include _span, a, sub and sup_

padding is usually used to improve readability

the best way to handle dimensions on an element is:

1. set a width
2. let the height be calculated using the heights of the children
3. adding padding where necessary


### box sizing
by default, the total width and height of a box is the sum of the cotent width and height, padding and border
the box-sizing property modifies how the total width and height of an element are calculated. The 2 values are:
*content-box:* dimensions are calculated by adding the width(or height) + padding + border width
*border-box:* the calculated height (or width) all add up to the set values. the content dimensions are recalculated 
this property is best set on the universal selector

inline elements do not follow box model rules so applying some properties do not work as expected e.g like when applying width to an anchor tag

margin and padding in inline elements only works horizontally

the display property sets how the associated element is formatted and positioned. The available values for this property are _inline, inline-block block, flex and grid_

block: default value for block elements
inline: default value for inline elements
inline-block: combines features of block and inline elements. Just like in inline elements, these elements dont start on a new line and the default width is the width of the content. Just like in block, width and height can be set, padding, border and margin applies as expected.
display: inline-block; essentially allows us to add block properties to inline elements
This can be used when you need inlin elements to appear next to each other e.g buttons, animating a single word in a sentence etc.
This means that inline-block is applied to most inline elements in a webpage.

*replaced inline elements* include input, text-area img, select etc. because the given html tag is replaced with the associated html when the page is rendered. Box model properties apply to them even though they are technicallly inline elements.


### CSS RESET
browsers have built in rules that style each element.
The universal selector is used to remove all padding and margin from all elements.

element resets can also be used on the various element selectors e.g. removing the bullets from ul elements using list-style:none;

aside from resetting, one can use *normalize.css* that sets default styling for elements. It is essentially a css file with default values for all elements. It's aim is cross-browser compatibility.

### max-width & max-height
max width ensures elements are responsive for different screen sizes

for block-level elements, if the viewport shrinks below what is set in max-width, the element width becomes the width of the viewport/parent. On the other hand, it wont go beyond the set value if the viewport/parent container expands

fir inline-level elements, the max-width value stays constant if the viewport shrinks below the set number. It like max-width has no impact on an inline element

adding max-width on images creates a responsive layout


max width behaves differently depending on the value of the display property.

max-width can be used on the main container to ensure that content does not go too wide on larger screens.


start from 7:30:00






