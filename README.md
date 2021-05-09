# Writepro

Writepro is a Web Application for content writers and bloggers to automate the workflow.

## Installation

#### Prerequisites:

- Python 3
- PostgreSQL

Clone the Repository using terminal.

```bash
git clone https://github.com/davesahaj/winter-internship.git
```

- ### Backend:

  - #### install the package manager [pip](https://pip.pypa.io/en/stable/) for python.
  - #### Navigate into the Repository directory root.
  - #### install virtual enviornment:

  ```bash
   pip install virtualenv
  ```

  - #### Create a virtual enviornment in backend

  ```bash
   cd backend
   virtualenv venv
  ```

  - #### Activate virtual enviornment
    > #### for ubuntu:
    >
    > ```bash
    >  source venv/bin/activate
    > ```
    >
    > #### for Windows:
    >
    > ```bash
    >  source venv\Scripts\activate
    > ```

  > This virtual enviornment must be activated everytime to run or build project.

  - #### Install Python requirements

  ```bash
  pip install -r requirements.txt
  ```

  - Create a database in postgresql server:

  ```sql
  CREATE DATABASE [DATABASE NAME, WITHOuT BRACKETS];
  ```

  - open writepro/settings.py in backend dir and edit the following lines:
    >     DATABASES =
    >      {
    >       'default':
    >       {
    >        'ENGINE': 'django.db.backends.postgresql',
    >        'NAME': '[YOUR DATABASE NAME]',
    >        'USER': '[ENTER YOUR POSTGRES USERNAME HERE]',
    >        'PASSWORD': '[ENTER YOUR POSTGRES PASSWORD HERE]',
    >        'HOST': 'localhost'
    >       }
    >     }

- ### Frontend:

  - install node package manager [npm](https://www.npmjs.com/).
  - Navigate into the frontend directory in the Repository root.
  - install node packages:

  ```bash
   npm install
  ```

  - #### Build Frontend:
    > #### For ubuntu:
    >
    > ```bash
    >  npm run build
    > ```

  > #### For Windows:
  >
  > replace this line in package.json:
  >
  > ```bash
  > "build": "rm -rf ../backend/build/ && react-scripts build && cp -r build ../backend/build",
  > ```
  >
  > with this:
  >
  > ```bash
  >  "build": react-scripts build
  > ```

  > in terminal, run:
  >
  > ```bash
  >  npm run build
  > ```
  >
  > copy the generated build folder to backend directory in the repository root.

## Configuration

- ##### in the backend directory of root, execute the following command:

```bash
 python manage.py flush
 python manage.py makemigrations
 python manage.py migrate
```

## Usage

- ##### in the backend directory of root, execute the following command:

```bash
 python manage.py runserver
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
