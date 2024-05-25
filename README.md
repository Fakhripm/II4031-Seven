# Seven - Academic Database Program
## II4031 Kriptografi dan Koding

## Table of Contents
- [Program Description](#program-description)
- [Requirements](#requirements)
- [How to Run the Program](#how-to-run-the-program)
- [Project Structure](#project-structure)
- [Authors](#authors)

## Program Description
Seven is a web-based academic database application consists of student academic history transcript.

## Requirements
- [NodeJS](https://nodejs.org/en/download)

## How to Run the Program
1. Clone this repository
   ```sh
   git clone https://github.com/Fakhripm/II4031-Seven.git
   ```

2. Change the directory to the cloned repository
   ```sh
   cd II4031-Seven
   ```

3. Install the required package
   ```
   npm install
   ```

4. Run the program
   ```
   npm run dev
   ```

5. Open the program in a new browser tab or you can access the program on [this website](https://ii4031-seven.vercel.app/)


## Project Structure
    .
    ├── .next                       # Next.js build output directory
    ├── node_modules                # Node.js packages
    ├── public                      # Contains assets used in the program
    └── src                         # Contains the source codes of the application
        ├── app                     # Consists of the layout and main page of the application
        │   ├── api                 # API Route for Server Side
        │   └── decrypt             # Directory for decryption related files (if any)
        ├── components              # Consists of components that are used on the main page of application
        ├── context                 # Consists of context for the cryptography algorithm
        └── utils                   # Consists of utility functions including cryptography and database connection
            ├── crypto              # Directory for cryptographic algorithms
            └── supabase            # Directory for Supabase-related utilities

## Authors
| Student ID | Name |
|-----|----|
| 18221080 | Fakhri Putra Mahardika |
| 18221157 | Cathleen Lauretta |
| 18221171 | Hans Stephano Edbert N |