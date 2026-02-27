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
- [Contributing](#contrib)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>
Chesster is my very first personal project that I want to showcase for users to try out themselves. If you look at the code structure it's a bit messy and ugly as I am still learning web development while making this project, and I'll probably  continue on improving it the along the way.

## Getting Started <a name = "getting_started"></a>
I haven't had docker setup yet,  so you'll have to run them manually instead...

### Prerequisites
First, you'll need nodejs installed on your system. See [Node](https://nodejs.org) for setting up nodejs.

### Installing
1. Clone this repo to your device and change directory to the cloned repo:

```
git clone https://github.com/lowlevelape/chesster.git
cd chesster-main
```

2. Install npm packages:

```
npm install --prefix ./chessboard && npm install --prefix ./engine
```

## Running the game <a name = "tests"></a>
1. Now that you've installed the required npm packages all you have to do is run:

```
npm run dev --prefix ./chessboard & (cd engine && node server.ts)
```

Note: You'll have to manually terminate the node-server process if you want to stop it as it runs as a background process.

## Authors <a name = "authors" />
- [@lowlevelape](https://github.com/lowlevelape)

## Contributing <a name ="contrib" />

Contributions, issues, and feature requests are welcome!

## Acknowledgements <a name = "acknowledgement"></a>
- Special thanks to [bluefeversoft](https://github.com/bluefeversoft) for their chess engine [vice11](https://github.com/bluefeversoft/vice)
