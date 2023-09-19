interface SStorage<T> {
    [key:string] : T
}
class LocalStorage<T>{
    private storage: SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
    }
}
const stringStorage = new LocalStorage<string>()
stringStorage.get("key")
stringStorage.set("hello", "tmdwo")
const booleanstorage = new LocalStorage<boolean>()
booleanstorage.get("ke")
booleanstorage.set("hello", true)