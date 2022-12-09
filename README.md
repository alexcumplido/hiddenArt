# eXplorins Hacking the City Hackathon ⚛

![Barcelona-Shutter-Art-Garage-Door-Graffiti](https://user-images.githubusercontent.com/102038261/205466234-bc623512-8ba9-4e0b-a125-e73976d4d139.png)

## Hackathon context 🌏

This is a response to the "Hacking the City" [eXplorins](https://www.explorins.com/home) hackathon. An event to create Tech4Good solutions while contributing to a social, cultural and commercial positive impact on Barcelona local communities.

## Project context 🌏🌏

Team members: Maya Eyal (Project Management), Cristian Richarte (Blockchain), Alexandre Cumplido (Front End).

**Contribution ?**

Increase income perceived by street Artist from their performances and economic activity while decreasing pressure on main touristic places.

**Solution ?**

A platform that offers discover Barcelona through unique experiences connecting street artists and people looking for an alternative mainstream tourism points.

**Target ?**

Tourists, local citizens, street artists, local tourism industry stakeholders.

## Requirements 🎯

1. Open Stack
2. Code need to be Open Source
3. A combination of tech-social-culture tools

## Installation ⚙️

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/hiddenArt.git
```

```shell
    # Install dependencies
    npm install
    yarn install
```

```shell
    # Run project
    npm run dev
    yarn dev
```

## Project Structure 🧬

Even initially we planned to follow a [Component Driven UI](https://www.componentdriven.org/) development methodology creating components from the bottom up and then combining them into complex ones due to the time constraints we structured the project in routes, each route is a Ui view that contains all the components regargind the view itself.

The modal component is implemented using [React portals](https://reactjs.org/docs/portals.html). Portals let you render a children into a DOM node outside of the DOM hierarchy from its parent component.

## Stack ⚒️

Frontend

- HTML5
- CSS3
- JavaScript
- React
- Vite

We used as a build tool [Vite](https://vitejs.dev/) because of its fast configuration and also because creating a development environment from the ground up allows to realize what dependencies and scripts the project will really require.

NFTs

- Solidity
- Hardhat
- IPFS
- Infura

Although due time constraints, we did not create a full blockchain DApp we managed to create the Smart Contracts and be able to visualize the NFT's metadata.

## Visuals 👀

Soon

## Roadmap

- Implement markers so study area cases buttons in hoe are replaced
- Implement a filter into the area view so artists can be filtered by topics
- Migration from JavaScript to TypeScript
- Test code quality witch Codefactor software
- Use Sass of the CSS

## Contributing 🙌

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and subit a pull request with a description

## Contact info 📫

[Maya Eyal](https://www.linkedin.com/in/maya-eyal) | [Cristian Richarte](https://www.linkedin.com/in/cristian-richarte-gil/) | [Alexandre Cumplido](https://www.linkedin.com/in/alexandrecb/)

## Acknowledgements 🙏

[Josh Comeau custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)

[Brian Holt eslint configuration](https://github.com/btholt/citr-v8-project/blob/main/03-jsx/.eslintrc.json)

## License 📃

[MIT License](https://opensource.org/licenses/MIT)
