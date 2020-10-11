# TourTip
 
## TourTip Usage

```react
<TourTip aria-label="Skin TourTip">
    <Icon type="menu" />
</TourTip>
```

## TourTip Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`isImg` | boolean | No | no | Used to give child image an actionable image-tile effect on hover, focus and active states.
`href` | String | No | no | Used to create anchor element

## TourTip Events

HTML Anchor Element Events

HTML Button Element Events


# TourTip

## TourTip Example

```react
<TourTip a11y-close-text="Dismiss tourtip">
    <TourTipHost>
        <p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
        eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
        mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
        Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
        duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
        voluptate dolore quis aliquip duis duis.</p>
    </TourTipHost>
    <TourTipHeading>Important</TourTipHeading>
    <TourTipContent><p>This new feature was added.</p></TourTipContent>
</TourTip>
```

## TourTip Sub-tags

Tag | Required | Description
--- | --- | ---
`<TourTipHost>` | Yes | The body which will be wrapped as the tourtip's host
`<TourTipHeading>` | Yes | The heading to be displayed in the tourtip
`<TourTipContent>` | Yes | The content to be displayed in the tourtip

## TourTip Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`pointer` | String | No | No | options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`
`expanded` | Boolean | No | No | expanded tourtip flag
`style-top` | String | No | No | a style property for the CSS `top` rule
`style-left` | String | No | No | a style property for the CSS `left` rule
`style-right` | String | No | No | a style property for the CSS `right` rule
`style-bottom` | String | No | No | a style property for the CSS `bottom` rule
`a11y-close-text` | String | No | Yes | A11y text for close button

## TourTip Events

Event | Data | Description
--- | --- | ---
`onCollapse` | | overlay has been collapsed
