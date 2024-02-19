export async function load() {
    const products = await fetch('https://api.tales-whispers.gr/store/products', {
        headers: {
            Authorization: 'Api-Key FhhqC40c.99dTki73PXwAWzGhgQiflPrnGDOSTPKT'
        }
    }).then(res => res.json()).then(res => res.results)
    return {
        products: products
    }
}