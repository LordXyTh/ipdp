import{N as e,O as r,P as t}from"./vendor-54cab04d.js";import{m as o}from"./stores-b93fd071.js";let n,s,i,a,d,l,p,c,m,u,f;e().url("/server"),e().url("/api"),e().url("http://localhost:3012"),r.Buffer.from("00","hex");let y=0;const b=()=>{if(("undefined"==typeof liquidjs||"undefined"==typeof bip39||"undefined"==typeof bip32)&&y<5)return y++&&setTimeout(b,1e3);({Address:n,confidential:s,ECPair:a,Psbt:d,payments:l,network:p,networks:c,Transaction:m}=liquidjs),p=c.regtest,({generateMnemonic:i,mnemonicToSeedSync:u}=bip39),({fromSeed:f}=bip32)},h=()=>{let{pubkey:e}=k(),r=l.p2wpkh({pubkey:e,network:p});return l.p2sh({redeem:r,network:p})},w=()=>{try{return o.set(i()),{address:h().address,mnemonic:o}}catch(e){throw console.log(e),new Error("Failed to create wallet from mnemonic")}},k=()=>{try{console.log("bang",t(o));let e=u(t(o)),r=f(e,p).derivePath("m/84'/0'/0'/0/0"),{publicKey:n,privateKey:s}=r;return{pubkey:n,privkey:s,seed:e,base58:r.neutered().toBase58()}}catch(e){throw console.log(e),new Error("Failed to generate keys with mnemonic")}};export{w as c,b as s};
