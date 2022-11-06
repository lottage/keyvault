# Web3-Security-Hide-Private-Keys-NextJS
👮‍♂️ This repo includes all the steps to use Server Side Rendering SSR and API to properly hide private keys in Web3 dev front-ends. Store the keys in a separate API server and use routes to retrieve the values. Use SSR to render the keys and maintain the values hidden from the client's browsers due to client side rendering.

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

Please follow video tutorial.

Click for video:

<a href="https://youtu.be/ggh83ZEpUnI" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 

## Step-1 Create the Key Vault Server in Next JS

```shell
npx create-next-app keyvault
```

## Step-2 Add the keyvault.js file under /pages/api/

add the file keyvault.js located in this repo to /pages/api/

Update the file with your own values:

```shell
      privkey:
        "ENTER YOUR WALLET PRIVATE KEY",
      apikey: "ENTER YOUR API KEY",
```

Save file.

Go to your project folder and start the server:

```shell
      cd keyvault
      npm run dev
```

## Step-3 Provide to your NextJS FrontEnd the path to the keyvault API

Create an env file in the root project directory:

" .env.local "

Add the following value inside the file:

```shell
     NEXT_PUBLIC_API_SERVER='http://IPADDRESS_OF_YOUR_KEYVAULT_SERVER:3000/api/keyvault'
```

Save file and restart server

```shell
ctrl + C
npm run dev
```

## Step-4 Add the Server Side Rendering Function in the page you wish to use rendered values:

Example for index.js, go to the end of the file and add this export function:

```shell
export async function getServerSideProps() {

  const res = await fetch(process.env.NEXT_PUBLIC_API_SERVER).then(
    (response) => response.json()
  );

  return {
    props: {res}
  };
}
```

Now you may invoke "props" under the page client export function:

example for index.js, add "props" to the function:

```shell
export default function Home(props) {
```

You may now use the props values to replace the private key values in the function:

example : 

Call: "props.res.privkey" under to use the SSR wallet private key value:

```shell
const wallet = new ethers.Wallet(props.res.privkey, provider)
```

Save file and refresh!

Watch the video if you have any doubts. 
