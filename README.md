## Visit  
The easiest way to access the app is to check it out online at: www.osadhi.app

## Getting Started
I used pnpm but it probably also works with yarn or npm.  

First, run the development server:

```bash
git clone https://github.com/imjwang/climate.git
cd climate
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
In order to use generate and analyze features locally, you have to have an openai api key. create one as a .env.local and name it like below:   
```config
OPENAI_KEY=<yourkeyhere!>
```


This app was mostly designed for larger screens, it may appear wonky on mobile.
