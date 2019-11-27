export function domInject(selector: String) {
    return function(target:any, key:string) {
        let elemento: any;

        const getter = function() {
            if(!elemento) {
                console.log(`buscando ${selector} para injetar em ${key}`)
                elemento = $(selector);
            }
            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}