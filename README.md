![autorole](https://socialify.git.ci/pylonmodules/autopublisher/image?description=1&font=Raleway&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F126590123%3Fs%3D200%26v%3D4&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark)

> Made by **[proudparrot2](https://github.com/proudparrot2)**
>
> If you haven't used Pylon Modules before, or are confused by what's in this README, please read our [guide repository](https://github.com/pylonmodules/guide)


## Installation
1. Make a new file in the Pylon Studio Editor called `modules/autopublisher.ts`, and add the contents of `module.ts` to it.
2. Add this configuration to your config.ts file:
```ts
const autopublisher = {
  channels: ['channel 1', 'channel 1'],
}; export { autopublisher };
```
> `channels` is an array of the channel IDs you want messages to be published in. IDs must be news channels, or the module will error.


3. Append this to your `main.ts` file
```ts
import 'modules/autopublisher' 
 ```
 
 When you save (CTRL/CMD + S), the module should be enabled!
 
 > If you need help with this module, please join our [support server](https://discord.gg/85Jmh74ePB)!
