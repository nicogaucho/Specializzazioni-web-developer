# Component life-cycle React

```js
useEffect(() => {
  console.log('Effetto che si esegue ad ogni update del componente');
});

useEffect(() => {
  console.log('Effetto che si esegue sono dopo il primo mount del componente, con array dipendenze vuoto');
}, []);


useEffect(() => {
  console.log('Effetto che si produce all aggiornamento della dipendenza di stato');
}, [dipendenza]);

  useEffect(() => {
    console.log('Effetto che si esegue sono dopo il primo mount del componente, con array dipendenze vuoto');
    return () => {
      console.log('Effetto che si produce quanto il componente viene smontato dal dom');
    }
  }, []);

  useEffect(() => {
    console.log('Effetto che si produce a ogni update di count', count);
    return () => {
      console.log('Effetto che si produce a ogni update di count per tenere traccia del suo valore precedente', count);
    }
  }, [count]);
```