<a name="readme-top"></a>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [CLM-Agent-Portal](#about-project)
  - [🚀 Live Demo](#live-demo)
  - [📄\[Project Documentation\] ](#project-documentation)
  - [🛠 Built With ](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#authors)
  - [🔭 Future Features](#future-features)
  - [🤝 Contributing ](#contributing)
  - [⭐️ Show your support ](#️support)
  - [🙏 Acknowledgments ](#acknowledgements)
  - [📝 License ](#license)

<!-- PROJECT DESCRIPTION -->

# CLM Agent Portal <a name="about-project"></a>

This project is for a mobile application from which municipality agents can validate physical copies of business licenses/permits and view a list of expired permits/licenses based on jurisdiction. The application has a [sibling platform](https://github.com/Thoth1111/Permit-Manager) in which business owners can register their business permits/licenses and pay for extensions. It features a node.js [backend](https://github.com/Thoth1111/CLM-Server/) and a mongoDB database.


The main features of the app are:
- Agent authentication for login alone using JWT(JSON Web Token).
- List of expired permits and those due to expire within 30 days or less within the jurisdiction given to the agent in session.
- Digital License view that displays crucial details of a business license/permit.
- An in-app scanner to scan the QR codes on physical copies of business licenses/permits and validate them.

## 🚀 Live Demo <a name="live-demo"></a>

- [Click here for live demo](https://www.loom.com/share/ea16cb1a5a1c49cc927b5b615f4f3cc9?sid=daeaf47f-991a-4ff5-bae5-cd9ec423d7dc)


## Project Documentation 📄 <a name="project-documentation"></a>

- GitHub repository [link](https://github.com/Thoth1111/CLM-Agent-Portal)👈


## Built With 🛠️ <a name="built-with"></a>

- Programming Languages: JavaScript.
- Frameworks: React-native.
- Database: MongoDB
- Version-Control: Github

## Getting Started <a name="getting-started"></a>

To get a local copy up and running follow these simple steps.

### Prerequisites

- React, React-native & expo.
- An android device with the expo app installed or an emulator such as Android Studio.
- A code editor such as VS code.

### Setup

Get the code url by clicking `<code>` in the repository or use the link by provided below.

```
https://github.com/Thoth1111/CLM-Agent-Portal

```
Open the code editor and clone the repo. Alternatively, run the following command in the directory you wish to clone the application to.

```
$ git clone https://github.com/Thoth1111/CLM-Agent-Portal.git

```
### Install

In the root directory, open the terminal and run this command.

```
npm i

```
or 

```
npm install

```

### Run locally

Run the following command:

```
npn expo start

```
If using an emulator, such as Android Studio, connect & run the virtual device. Press `a` to run the application in the virtual device.

If using expo in an android device, open the expo app and scan the QR code from the terminal to run the app in the device.

### Run tests

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Authors <a name="authors"></a>

👤 **Alwyn Androvelle**

- Github: [@Thoth1111](https://github.com/Thoth1111)
- Twitter: [@androvelle](https://twitter.com/androvelle)
- LinkedIn: [@Alwyn](https://linkedin.com/in/alwyn-androvelle-simiyu)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Two factor authentication**
- [ ] **Pagination of lists**
- [ ] **Scalability features**
- [ ] **Testing**
- [ ] **Reset & Forgot Password actions**

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Thoth1111/CLM-Agent-Portal/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Show your support  <a name="️support"></a>

Give a ⭐️ if you like this project!

## Acknowledgments <a name="acknowledgements"></a>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
