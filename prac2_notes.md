https://github.com/gitdagray/css_course

## ⭐️ Course Contents ⭐️ ##
(0:00:00) Intro(0:01:08) 

Chapter 1: Start Here

(0:14:50) Chapter 2: Selectors

(0:34:41) Chapter 3: Colors

(0:51:13) Chapter 4: Units & Sizes

(1:11:56) Chapter 5: Box Model

(1:37:08) Chapter 6: Typography

(2:00:29) Chapter 7: Styling Links

(2:16:37) Chapter 8: List Styles

(2:32:31) Chapter 9: Mini Project

(2:45:04) Chapter 10: Display

(3:00:21) Chapter 11: Floats

(3:12:46) Chapter 12: Columns

(3:34:30) Chapter 13: Position

(3:57:53) Chapter 14: Flexbox

(4:21:39) Chapter 15: Grid Layout

(4:46:33) Chapter 16: Images

(5:32:40) Chapter 17: Media Queries

(5:58:59) Chapter 18: Card Project

(6:33:21) Chapter 19: Pseudo

(6:52:56) Chapter 20: Variables

(7:20:28) Chapter 21: Functions

(7:50:05) Chapter 22: Animations

(8:37:33) Chapter 23: Organization

(8:57:23) Chapter 24: Final Project

## the cascade 

the cascade reders to the process that determines which styles are applied to an element when multiple conflicting rules exist

when multiple rules target the same element, the cascade determines the winner based on the following

1. origin and importance
-styles marked with !important have the highest priority
-author styles cs user-agent styles
-user styles 

2. specificity
whch selector is more specific

3. source order

if specificity is tied, the last rule in the CSS file wins!

## CSS linking styles
There are 3 ways to include css in a html document
1. external css
2. internal css
3. inline css

the format in css is:

selector{
    declaration;
    property:value;
}

the whole thing is a css _rule_ or _ruleset_

## types of selectors 
these include: 
 
### 1. element selector 
e.g body {}, div {} article {} etc

these can be grouped e.g h1, h2 {}

syntax like x1 x2 {} is looking for a all bested elements of type x2 _inside_ x1

### 2. class selector 
e.g. .descriptive-name {} 

classes can be used multiple times in associated HTML

since they are more specific, they overule element selectors

### 3. id selector 

e.g #unique-id {}

these are the most specific

choose element and class selectors over id selectors whenever possible

### 4. universal selector 
it looks like * {} and selects all elements in on the page. It is not inheritance

typically used for a CSS reset


## the cascade 

css works from the top down meaning that the last ruleset on the file take precendence

on the other hand, specificity can override this behavior i.e. (id  class  element)

selecting an element in devtools can show you all the properties applied as well as those overriden

## inheritance 
This is where an element inherits the properties from the parent.

Typically, everything associated with font and typography (font, line height etc) is inherited. Other properties arent inherited e.g. border.

*NB:* form elements (button, input, textarea, select) do not inherit font settings.
To have them inherit font, use:
button, input, textarea, select {font:inherit;}


the main {} is a semantic element and appears once per page sort of like the body and html elements
It can be used to enter properties for children to inherit

the important flag overules all other properties

eg color:red!important will make all text red, completely ignoring rules of inheritance and specificity


## colors 
rgba(num, num,num, alpha) the alpha channel guides the transparency and has values 0 - 1

hsla(hue, saturation, lightness, alpha) is explained at 00:44:00

coolors.co


## css units 

- *px*: the only absolute unit commonly used. Using this in some properties e.g font size isnt recommended for UX since font size changes at the browser level will not override css settings. I can be used for other settings libe border
- *percentage*: also not to be used on font sizes. can be used with width. The percentage value is relative to the parent. element height changes with content and other settings
- *rem*: most used for font sizes. The default is 1rem. where root em is the default font size either set in the browser or in the html {} selector, usually 16px

- *em*: sets the size based on the what is in the parent. explained well at around 1:00:00 mark. Can be used for margin, padding etc. Should be avoided for font sizes. padding would be relative to the value of font-size

- *vw*: 1% of the viewport's width. percentage is preferred over vw to avoid the horizontal scrollbar
- *vh*: 1% of the viewport's height. can be used to grow an element to the size of the viewport even if it doesnt have enough content. e.g setting the body{min-height:100vh} allows the body element to take up the whole height and to grow with the content.


# CSS BOX MODEL 
the box model of an element can be viewed when selecting the element in devtools

things to do with border settings are explained at 1:12:00

the outline property is not part of an element's box model


# TYPOGRAPHY 
this is the way that text is arranged and presented

font-size isnt inherited from the body to a form elements. Use font:inherit; to force inheritance from parent

the list of suggestions for font-family is called the _font stack_.
1:57:00 shows how to use custom fonts

# STYLING LINKS 

the css preudo classes required to style links include
- a:link{}
- a:visited{}
- a:active{}
- a:hover{}
- a:focus{}
- a:target{}
- a:any-link{}
- a:focus-visible{}
- a:focus-within{}

pseudo classes represent the current state of an element

## :visited 
Why Some Styles Don’t Work in :visited
*Allowed Styles (will work):*
- color
- background-color (with some limitations)
- border-color (if borders are used)
- outline-color
- column-rule-color
- fill and stroke (for SVG)

*Blocked Styles (will not work):*
- text-decoration (e.g., line-through, underline)
- text-transform (e.g., uppercase, lowercase)
- font-family, font-size, font-weight
- visibility, opacity, display
- Any layout-changing properties

Why?
If text-decoration or text-transform worked, a malicious site could check if a link was visited by measuring its visual changes (e.g., checking if text becomes uppercase or strikethrough).

Browsers enforce these restrictions to prevent history sniffing attacks.

when styling links, you have to consider specificity and the order the pseudo classes appear in the cascade (in the css file)

a specificity calculator can help in debugging:
https://specificity.keegan.st/


the cascade order for link pseudo cascade follows the *LVHFA* sequence


# DISPLAY TYPES 
the types of elements:
1. block level elements
2. inline level elements
3. inline-block
4. none : completely removes the element from the DOM. Changing opacity over this is preferred for webpage accesibility.
## block level elements 
Common Block-Level Elements

### Structural & Sections 

- div – Generic container.

- header – Introductory or navigational content.

- footer – Footer for a section/page.

- main – Main content of the document.

- section – Thematic grouping of content.

- article – Self-contained composition (e.g., blog post).

- aside – Tangentially related content (e.g., sidebar).

- nav – Navigation links.

### Text & Headings 

- h1 to - h6 – Heading levels 1–6.

- p – Paragraph.

- blockquote – Long quotation.

- pre – Preformatted text (preserves whitespace).

- address – Contact information.

### Lists 

- ul, - ol, - dl – Unordered/ordered/description lists.

- li – List item.

- dt – Description term.

- dd – Description details.

### Tables 

- table – Table wrapper.

- caption – Table title.

- thead, - tbody, - tfoot – Table sections.

- tr – Table row.

- th – Table header cell.

- td – Table data cell.

### Forms 

- form – Form container.

- fieldset – Groups form controls.

- legend – Caption for - fieldset.

### Media & Embeds 

- figure – Self-contained media (e.g., images, diagrams).

- figcaption – Caption for - figure.

- hr – Thematic break (horizontal rule).

### Others 

- canvas – Drawing surface (JavaScript).

- noscript – Fallback for disabled scripts.

Some default properties include: 
- they occupy 100% width of the parent
- they stack ontop of each other in the parent
- styling like margin, padding, borders etc can be applied


## inline level elements 
These are elements that do not cause a new line break and only take up as much width as is necessary

Common Inline Elements include: 
### Text & Formatting 

- span – Generic inline container.

- a – Hyperlink.

- strong or b – Bold/important text.

- em or i – Italicized/emphasized text.

- u – Underlined text (rarely used).

- s or del – Strikethrough/deleted text.

- ins – Inserted text.

- mark – Highlighted text.

- small – Smaller text.

- sub or sup – Subscript/superscript.

- abbr – Abbreviation (e.g., "HTML").

- cite – Citation (e.g., book title).

- code – Inline code snippet.

- kbd – Keyboard input (e.g., Ctrl+C).

- samp – Sample output.

- var – Variable (e.g., x).

- time – Machine-readable date/time.

- q – Short inline quotation.

- dfn – Definition term.

### Media & Embeds 

- img – Image.

- svg – Scalable vector graphic.

- br – Line break.

- wbr – Optional line break opportunity.

### Forms 

- input – Form input.

- textarea – Multiline text input.

- select – Dropdown list.

- button – Clickable button.

- label – Label for form elements.

- output – Calculation result.

### Interactive 

- a (repeated, but key for links).

- button (repeated, but key for actions).


Inline-level elements (e.g., span, a, strong) have certain limitations on which styles can be applied effectively due to their default display: inline behavior. Here’s a list of CSS properties that *either don’t work or behave unexpectedly* on inline elements:

1. Layout & Box Model Properties (Ignored or Partial Support)
_Width/Height:_

width, min-width, max-width

height, min-height, max-height

*Exception:* Replaced inline elements (e.g., img, input ) can use these.

_Margins/Paddings:_

margin-top, margin-bottom (ignored; only margin-left/margin-right work).

padding-top, padding-bottom (visible but do not push away surrounding content; may overlap).

_Floats & Positioning:_

float (converts the element to display: block).

position: absolute/fixed (also forces block-level behavior).

2. Display & Flow Properties (Overrides Inline Behavior)
display: flex / display: grid (forces a block-level container).

display: table (forces block-level).

3. Background & Border Quirks
background-color/background-image works, but background may overlap adjacent lines due to inline flow.

border-top/border-bottom (applies visually but does not affect layout; may overlap text).

4. Text & Alignment Limitations
vertical-align (works but only affects the current line, not the parent’s full height).

text-align (must be applied to the parent block container, not the inline element itself).

*NB:* To apply these styles, switch the element to inline-block or block:

using inline-block can be useful when:
1. when turning an anchor element into a button
2. turning a list into row instead of the usual vertical arrangement


## CSS FLOATS 
the float property is used to determin how  box should be floated
e.g. float:left on a div of given with and hight will love it to the left and wrap content around it

## CSS COLUMNS 

see the columns class in 3.css to see some related declarations

## CSS POSITIONING 
the property position has the following values:
- *static;* is the default in all elements
- *absolute:* an element with this property needs a relative parent. It also needs at least a top,left,right, bottom attribute. when nothing is set, it becomes relative to the viewport. setting position:relative to a parent makes the absolute positined element be relative to said parent. This absolute positioned element picks an ancestor that is closest to it
- *relative:* counts top, left, right, bottom relative to its parent container
- *fixed:* makes element non-responsive to scrolling
- *sticky:* stays in its normal flow until scrolling moves it to coordinates set in the class.


## CSS GRID  

adding display:grid; in the parent container makes all children grid items.

some useful properties include
- *grid-auto-flow*: row is the default but also takes column as an alternative
- *grid-template-columns*: takes absolute values e.g rem, fraction values(fr), repeat(numOfCols, size1 size2...) when size is uniform e.g. grid-template-columns:100% defines one column and gives it 100% width
- *grid-template-rows*: takes absolute values e.g rem, fraction values(fr), repeat(numOfCols, size1 size2...) when size is uniform, minmax(150px, auto)
- *grid-auto-rows*: can take minmax(size, auto)
- *row-gap*: defines a gap/gutter between the rows
- *column-gap*: defines a gap/gutter between the columns
- *gap*: combines both row-gap and column-gap

*how to easily center grid items*

    myselector{
        display: grid;
        place-content: center;
    }
    
*as opposed to centering flex items:*

    
    myselector {
        display:flex;
        justify-content:center;
        align-tems:center;
}

you can use preudo selectors on individual grid items to change behaviors

## CSS MEDIA QUERIES  
These allow site modifications based on specific parameters

the browser viewport width is the most used parameter

the viewport  metatag enables responsive design


### media query syntax 

@media media_type and (condition:breakpoint){
    //css rules
}

some condtions include:
1. _min-width_ : should be read as "start from"
2. _max-with_ :should be read as "up to"
3. _orientation_: landscape or portrait
4. _min-aspect-ratio_: more specific values than orientation

### Common Media Query breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 481px | Mobile devices |
| 481px — 768px | iPads, Tablets |
| 769px — 1024px | Small screens, laptops |
| 1025px — 1200px | Desktops, large screens |
| 1201px and greater | Extra large screens, TV |

### Bootstrap breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 576px | xs |
| >=576px | small |
| >=768px | medium |
| >=992px | large |
| >=1200px | xl |
| >=1400px | 2xl |

### Tailwind breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 640px | xs |
| >=640px | small |
| >=768px | medium |
| >=1024px | large |
| >=1280px | xl |
| >=1536px | 2xl |


## CSS PSEUDO SELECTORS
These selectors include both pseudo classes and pseudo elements

a pseudo class is a selector that selects elements that are in a specific state e.g. focus, hover, visited etc i.e _different specific states of a given element_

a pseudo element acts like you have added a new html element into the DOM

pseudo elements are represented with :: as opposed to the : in pseudo classes 
https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/

### pseudo classes
the *:is* pseudo class is going to adapt that is the higher specificity within its parenthesis

*:where* does the same thing as :is but doesn't have any specificity meaning that  you can override all rules within it

*:target* shows the last element selected

*.my_class my_selector:not([alt])* filters out elements that do NOT have what is specified which in this case is al alt tag 

*:nth-child*: selects the element attaced to it e.g .card:nth-child(2) selects the second element with the card class. It bases the count on the actual origical order in the html and not any ordering in previous css rules

*:root*: used to store all variables the css file needs. Everything inherits from this class since it references the document root. the html tag is also a child of this root class


### pseudo elements
*::after* this pseudo element selector selects the element and allows you do add elements

*::before*  runs the css rules to before the selector in question

*::first-letter*

*::first-line*

## CSS VARIABLES
these are used like normal coding variables for the reasons you would expect.
the syntax looks like:

--VAR_NAME: value eg --BGCOLOR: #FFF;
to use it, use the function var(--VARNAME)

multiple variable names can have the same value

redefining a variable woud look like --VAR-NAME: new_value


## CSS FUNCTIONS

- *color functions* are like rgb(), hsl(), hwb() etc
- *image functions* are like radial-gradient(), linear-gradient()
- *reference functions* are like var() url()
- *math functions* are like calc(), min()

a list of css functions: https://www.geeksforgeeks.org/css-functions-complete-reference/

some common css functions include:

1. _min(var1, var2)_ - always selects the smallest of the entered arguments. It is better to have one variable as an absolute value e.g. 12px and another that is relative to e.g viewport withd e.g 10vh

2. _max(var1, var2)_ - always selects the larger of the entered arguments. It is better to have one variable as an absolute value e.g. 12px and another that is relative to e.g viewport withd e.g 10vh

3. _clamp(var1, var2, var3)_: works just like min() and max() above but var1 is the min value, var2 is the ideal value and var3 is the maximum value. 

4. _calc(expression)_ :calculates css property values. It can mix different units (like px, %, em, rem, vh, vw, etc.)  in a single expression. It also supports basic math operations (+,-,*,/)

examples of calc() include: 

.element {
  width: calc(100% - 50px);
}

this makes the element take up the fill width of its parent minus 50px

.box {
  padding: calc(2 * (10px + 5%));
}
calculates the padding for the box element as 2 × (10px + 5%)

5. _brightness(20%)_: used as a value for the filter property to change brightness

6. _hue-rotate(120deg)_ used as a value for the fitler property to change the value based on the color wheel

## CSS ANIMATIONS AND TRANSITIONS

the following are the most common properties:
### 1. _transform._ Possible values include:
 - *translateX(arg)* to move it sideways. If the arg is a percent value, it moves it based on the size of the element it's in. It takes both a + and - nums
 - *translateY(arg)* to move it up or down.
 - *translate(x_value, y_value)* combines translateX and translateY
 - *rotateX*: rotation is top to bottom
 - *rotateY*: rotation is left to right
 - *rotateZ*: rotation is clockwise. It is also the same as using rotate() 
 - *scaleX*: changes the x coordinate size in proportion to original size. e.g 10% shrinks it to 10% of original size
 - *skewX*: causes element to lean on the x axis
 - *skewY*: causes element to lean on the y axis
 - *skew*: combines skewX and skewY

### 2. _transition_ Possible values include:
    {
        transition-property: background-color, transform;
        transition-duration: 2s, 3s;
        transition-delay: 0.2s;

    }

these two properties work together to change the set properties (bg color) after 2 seconds, after delaying for 1 second.


    {
        transition-timing-function: linear;
    }


this changes the rate of the transition. possible values include ease, ease-in ease-in-out etc

### 3. _animation_ 
first, define the animation declarations e.g.

    {
        animation-name: slide;
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        animation-iteration-count: 5;

    }

then define the keyframes like:

@keyframes my_identifider(in this case, its slide) {

}

## CSS ORGANISATION









































