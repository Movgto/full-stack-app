<a name="readme-top"></a>
<div align="center">
 <h1><b> Welcome To Our Final Capstone Project </b></h1>
</div>  

<br/>

<div align="center">
  <h1 style="border-bottom: none;"> 🙋‍♂️ Book An Appointment App 🏍️ </h1>
</div>

<br/>

# 📗 Table of Contents 
- [📗 Table of Contents](#-table-of-contents)
- [📖 Final group capstone - Book an Appointment ](#-final-group-capstone---book-an-appointment-)
  - [🚀 Frontend App ](#-frontend-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Run rails](#run-rails)
  - [👥 Authors ](#-authors-)
  - [📆 Kanban Board](#kanban-board)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
      - [Development Team](#development-team)
      - [Institution](#institution)
      - [Reference Design](#reference-design)
  - [📝 License ](#-license-)

<br/>

<!-- PROJECT DESCRIPTION -->

# 📖 Final group capstone - Book an Appointment <a name="about-project"></a>

The project we built for the Final Project is based on an app to book an appointment to test ride a Ducati motorcycle. 

<br/>

## 🚀 Frontend App <a name="frontend"></a>

- [Click here to navigate to the Backend ](https://github.com/Movgto/full-stack-app-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- Ruby on Rails >=7
- React
- Postgres

### Key Features <a name="key-features"></a>

- Connection between Ruby on Rails and React in different apps
- Book an appointment to try a motorcycle
- Motorcycles that you selected as a theme
- Reserve form

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Coming soon]() 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites

- [Ruby on Rails >=7](https://rubyonrails.org/)
- [React](https://reactjs.org/)
- [Postgres](https://www.postgresql.org/)
- [Git](https://git-scm.com/downloads)

### Install

```
git clone git@github.com:Movgto/full-stack-app-backend.git
cd full-stack-app-backend
bundle install
```
```
git clone git@github.com:Movgto/full-stack-app.git
cd full-stack-app
npm install
```

### Usage

In the project directory, run the first time:

  ```
  bundle exec rake assets:precompile
  ```

then, you can use:

  ```
  ./bin/dev
  ```

or:

  ```
  rails s
  ```

Check on db/seed.rb for pre-loaded users, groups and, spendings, and likes for development

### Run tests
In the project directory, run the first time:

  ```
  bundle exec rake assets:precompile
  ```
then, you can:

  ```
  rspec .
  ```
however, if you haven't run
```
./bin/dev
```

### Run rails

To configure the database connection in Rails, you need to update the database.yml file located in the config folder. Follow these steps: Locate the database.yml file in the config folder of your Rails application.

1. Open the database.yml file using a text editor.

2. Find the default: &default section in the file.

3. Add the following lines under the default: &default section:
```
  host: localhost
  username: your_username
  password: your_password
  port: 5432
```
 

4. Replace your_username with your actual database username and your_password with your actual database password.
5. Save the changes to the database.yml file.
6. Run
```
rails db:create
```

```
rails db:migrate
```

```
rails db:seed
```

```
rails s
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Cristian Villa**

- GitHub: [@CVILLA09](https://github.com/cvilla09)
- LinkedIn: [Cristian Villa](https://www.linkedin.com/in/cristianvillavirgen/)


👤 **Sebastian Gonzalez**

- GitHub: [@shm04](https://github.com/shm04)
- LinkedIn: [Sebastian Gonzalez](https://www.linkedin.com/in/sebastian-hernandez-b42052259/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Kanban Board -->

## 📆 Kanban Board <a name="kanban-board"></a>

- [Our kanban board](https://github.com/users/Movgto/projects/5)
- We are a team of 2 members.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- Add different categories
- Add online shopping
- Add extra styling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Check the [issues page](https://github.com/Movgto/full-stack-app-backend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you found this project helpful, consider giving a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

We would like to express our deepest gratitude to all the people that have contributed to make this project possible.

#### Development Team
- **Cristian Villa**
- **Sebastian Gonzalez**

#### Institution
- **Microverse**: Thanks to all <img src="https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/61b33c641028e40f097ca160_microverse-nav-logo-170.png" width="108" height="18"> community for creating this bootcamp. The program's structure and the quality of education provided have been crucial for our growth as developers.

#### Reference Design
- I would also like to thank [<a href="https://www.behance.net/muratk">Murat Korkmaz</a>] for the original design on Behance that served as inspiration for this project.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
