import TranslateJSON from "./translate.json"
export const translate = (datos: any) => {
    const data = {}
    for (const key in datos){
        if(key in TranslateJSON){
            const name = TranslateJSON[key];
            data[name] = datos[key]
        }else{
            data[key] = datos[key]
        }
    }
    return data;
}