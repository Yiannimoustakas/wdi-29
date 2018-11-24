// console.log('loaded.');

// axios.get(URL)
// .then( res => {
//   console.log(res);
// });

const waiter = (time, msg) => {

  return new Promise( (resolve, reject) => {
    console.log('...in Promise callback');
    setTimeout( () => {

      const dice = Math.random();
      if( dice > 0.5 ){
        // success!
        resolve({ dice, time, msg});
      } else {
        // fail
        reject({ dice, time, msg, error: "YA BLEW IT"});
      }

    }, time );
  }); // end of Promise constructor

}; // end of waiter()

// console.log('Started call to waiter()');
// const prom = waiter(1000, 'first call')
// .then( data => {
//   console.log('then() Success!', data);
//   return waiter(2000, 'second call');
// })
// .then( data => {
//   // THIS callback is handling the resolve() from the call to waiter which is INSIDE the first then() callback
//   console.log('second then() Success!', data);
// })
// .catch( err => {
//   console.warn('catch()   Fail!', err)
// });

const doWait = async () => {

  try {
    const first = await waiter(1000, 'first call');
    console.log('first data:', first);
    const second = await waiter(2000, 'second call');
    console.log('second data:', second);
  } catch (err) {
    console.log('got an error!', err);
  };

};

doWait();
