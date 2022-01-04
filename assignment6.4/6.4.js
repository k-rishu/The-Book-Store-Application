
const cook=async(clientId, orders)=>{
    const serve={
        clientId,
        items:[]
    };
    console.log(`cook received order from client ${clientId} for ${orders}`);
    let i=0;
    return await new Promise((resolve, reject)=>{
        const iid= setInterval(()=>{
    
            let order= orders[i];
            console.log(`prepared ${order} for ${clientId}`);
            serve.items.push(order);
            i++;
    
            if(i===orders.length){
                //all orders are now ready
                clearInterval(iid);
                return resolve(serve); 
            }    
        },2000);   
    });
}

const waiter=async (clientId, orders)=>{
    //waiter will send the order after sometime
    return await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(orders.length===0){
                return reject(new Error(`waiter rejects order: No order item specified  ${clientId}`),{clientId});
            }
            console.log(`waiter received order from client ${clientId} for : ${orders.join(', ')}`);
           cook(clientId, orders)
            .then((result)=>{return resolve(`waiter serving for  ${result.clientId} : ${result.items}...`)})
        },500); 
    })
}

waiter('Vivek', ['chicken soup','chicken tikka', 'butter chiken', 'roti'])
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)});

waiter('shivanshi',[])
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)});

waiter('Sanjay', ['sandwitch','salad'])
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)});

