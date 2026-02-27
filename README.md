<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./misc/icon.png" alt="Project logo"></a>
</p>

<h3 align="center">Chesster</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/lowlevelape/chesster.svg)](https://github.com/lowlevelape/chesster/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lowlevelape/chesster.svg)](https://github.com/lowlevelape/chesster/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Challenge a self-hosted chess opponent powered by an adaptive AI (err... still working on it). Win, and it levels up—learning your style to crush you harder next time.
    <br> 
</p>

## Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](#contrib)
- [Known Issues](#issues)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>
Chesster is my very first personal project that I want to showcase for users to try out themselves. If you look at the code structure it's a bit messy and ugly as I am still learning web development while making this project, and I'll probably  continue on improving it the along the way.

## Getting Started <a name = "getting_started"></a>
### Prerequisites
First, you'll need docker installed on your system. See [Docker](https://docs.docker.com/get-started/) for the documentation on how to install it.

### Installing
1. Clone this repository:

```
# clone the repo
git clone https://github.com/lowlevelape/chesster.git
cd chesster
```

2. Run the docker compose file

```
docker compose up

# if you want to  run it as a backgroun process
docker compose up -d
```

## Usage <a name = "usage"></a>
Open your preferred browser, and visit `localhost:8006` to play the game.

## Known Issues <a name = "issues"></a>
- No response sent to engine server when on mobile.

## Authors <a name = "authors" />
- [@lowlevelape](https://github.com/lowlevelape)

## Contributing <a name ="contrib" />

Contributions, issues, and feature requests are welcome!

## Acknowledgements <a name = "acknowledgement"></a>
- Special thanks to [bluefeversoft](https://github.com/bluefeversoft) for their chess engine [vice11](https://github.com/bluefeversoft/vice)
