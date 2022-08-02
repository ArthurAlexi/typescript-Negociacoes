export function domInjector(seletor: string) {
    /**
     * decorator para uma proprieda:
     *  */    

    return function(
        target: any,
        propertyKey: string
    ){
        let elemento: HTMLElement | null = null
        const getter = function(){
            if(!elemento){
                elemento =<HTMLElement> document.querySelector(seletor)
            }

            return elemento
            
        }

        Object.defineProperty(target,propertyKey,{
            get: getter
        })
    }
}