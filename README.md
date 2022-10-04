# Introduction

Thank you for this opportunity! This was my first time using styled-components in React and really enjoyed using it.

# Further Improvements

-   Move all snapshots into a testing folder
-   Improve tests using .toHaveStyleRule() from styled-components
-   Sort Babel styled component issue (the snapshots aren't pulling through the classNames which could be right since they change but seems concerning to me.)
-   Move the API call into a state manager such as redux thunk allowing
    for beter error handling.
-   Improve API error handling such as a custom modal
-   Move endpoint to .env file
-   Application assumes that all expenses will be in GBP. If this is not the case a further call to some sort of currency conversion api will have to be made before the sort as currently this just looks at the value, however the dollar value maybe more but less when converted to GBP. This needs to account for monzo's (in this case) charges for currency exchange. This would be better done on the server side.
-   Move atom components to a component library with something like Storybook stories for each
-   Improve flexability of the components.
-   Reduce code by expanding the styled-components using the `styled(Container)...` feature it offers
