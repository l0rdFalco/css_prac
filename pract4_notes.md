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
