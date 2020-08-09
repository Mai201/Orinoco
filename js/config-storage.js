// config pour panier sur la page p-produit.html avec local storage et confirm panier pour commande

// userbasket à initialiser

if (window.localStorage.getItem('userBasket')) 
{
    console.log('User basket init and available in local browser storage')
} else 
{
    const userBasketInit = []
    window.localStorage.setItem('userBasket', JSON.stringify(userBasketInit))
}
  
// confirmer le panier

if (window.localStorage.getItem('confirmShoppingCart')) 
{
    console.log('Confirm shopping cart and available in local browser storage')
} else 
{
    const confirmShoppingCartInit = []
    window.localStorage.setItem('confirmShoppingCart', JSON.stringify(confirmShoppingCartInit))
}
  
// config du local storage pour envoyer dans panier
const userBasket = JSON.parse(window.localStorage.getItem('userBasket'))
const confirmShoppingCart = JSON.parse(window.localStorage.getItem('confirmShoppingCart'))