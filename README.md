# Code Organization

I am a firm believer in having a very clean, consistent and sensible folder structure that make it easy for developers to find what they are looking for.

This project attempts to demonstrate a folder structure for `React` projects that I have found to work for me.

The folder structure in this project is based on a set of rules that, over the years I have found, if violated often confuse developers and make it difficult to find what you are looking for when trying to find components, utils, etc...

This projects demonstrates using the conventions below.

## Large files are confusing, hard to understand and difficult to debug

I often see developers create very large files (especially in the `React` world) that contain lots of logic, conditionals, hooks, etc... In the world of `React` this is very easy to do, especially when you're timed for deadlines. However, trying to diagnose issues or understand the logic of very large components can be difficult and time-consuming.

My rule of thumb is that if a component contains several other components that require some logic to make them work or they require a lot of props then they should be extracted into a seperate component that is then imported. So, if the parent component contains several of individual pieces of logic or state
management for its' child components then it's probably a good
idea to extract those components into their own self-contained components.

## Your files should be organized in the same heriarchy that they are used

I believe that your file imports should make sense and following
the appropriate heriarchy. So, an import should not go up 3 levels
and then dive 4 levels into another module to get the module it needs (This does not apply if you are not using aliased imports, which you should be!).

For example, I think this is bad:

```javascript
// Filename: components/inputs/Input.tsx
import { extractText } from 'components/buttons/Button/utils'
```

In this case, the `Input` component is peering into private utilities of the `Button` component. If the `extractText` utility is needed by several components then it should be extracted into something like a global utils folder and imported as something like:

```javascript
import extractText from 'utils/dom/extractText'
```

I believe that doing this encourages developers to think about what exactly that function is doing and what's it's responsibilities are. Is `extractText` specific to just the HTML button or should it be generic to any HTML element. The answer to your question will potentially change the implementation details.

When developers are allowed to import utils and functions from just anywhere that can be problematic. That function may have just been intended for that component and might not work approrpriately if used elsewhere and/or changing it might make the implementation complex or confusing.

If the implementation is just specific to the button then changing the function name to be more specific like `extractButtonText` would make developers less likely to import that function.

## Your file names should make sense and be clear

Most developers do this, so it's not usually an issue. One preference I have developed recently is using prefixed file names. So, for example, most of my components have the following files `types.ts`, `{ComponentName}.tsx`.

However, when working on a project and editing multiple files it can be hard to distinguish between multiple `types.ts` files.

My convention now is to use the module prefix so if we were building a `Button` component then the files would be something like `Button.types.ts` and `Button.component.tsx`.

This makes is easy to know exactly what file you're working on when editing multiple files and also makes it easy to find files as well.

## Every file should serve one purpose and one purpose only

I often see files that do more than 1 thing such as defining types, defining utility functions and defining the main React Component. I am not a fan of that as I find it confusing for me to follow and it also increases the file size.

Thanks to bundling and module systems there is no need to put everything in 1 file anymore. I believe that creating multiple files that do 1 thing and 1 thing only is ideal as it makes it easy to know exactly where you should be looking if you need to change something. Experiencing a problem with the type definition? Well, that's in the `types.ts` file. A bug with a helper function? Well, just go to the `helpers.ts` file.

Not spending time trying to find files and trace down where a function if defined is a great benefit of creating files with 1 purpose.

So, in `React` world your component should be defined in 1 file, your components type defs in another, your components utils/helpers in another. This keeps your files small, easy to understand and helps in isolating tests as well.

## Your modules should be explicit about what is pubicly available

As I mentioned earlier, I am not a fan of just importing functions, types, or components from just anywhere. Even though our module systems allow us to do that I think that leads to confusion, hard-to-trace imports, errors and sloppy code. 

What I like to do is create an `index.ts` file for each module I create whether it is a component or just a utility function. Then, I use that file to export what should be publicly available from that module.

Doing this leads to less confusing imports, it prevents devs from having to be aware of the internal file structure of a module and it shortens import paths.

Its the difference between:

```javascript
import Button, { ButtonProps } from 'components/Button';
```

and

```javascript
import Button from 'components/Button';
import { ButtonProps } from 'components/Button/Button.types';
```

If a developer changes the file name of `Button.types` then you have to change the import paths as well. This requires other devs to have to constantly be aware of the internal file structure of that `Button` component.

Instead, devs shouldn't have to car about that and should be able to import what they need from 1 single place. That will reduce potential errors and dev frsutration.

The goes for utility functions or anything else, I will create an `index.ts` file that does the following:

```javascript
// File Location: utils/dom/extractText
export { default } from './extractText';
```

and to import it you just use:

```javascript
import extractText from `utils/dom/extractText`;
```
