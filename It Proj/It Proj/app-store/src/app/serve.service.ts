import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private _http:HttpClient) { }
dataofsell:any=[]
datafordisplay:any=[]
result:any
prodtoupdate:any
  addprod(data:any):Observable<any>{
    return this._http.post('http://localhost:5000/addprod',data)
  }
  getallprod():Observable<any>{
    return this._http.get('http://localhost:5000/getprod')
  }
  getelement(id:any):Observable<any>{
    return this._http.get(`http://localhost:5000/getprod/${id}`)
  }
  getserial(serial_no:any):Observable<any>{
    return this._http.get(`http://localhost:5000/getserial/${serial_no}`)
  }
  update(id:any,data:any):Observable<any>{
    return this._http.patch(`http://localhost:5000/updateprod/${id}`,data)
  }

  delete(id:any):Observable<any>{
    return this._http.delete(`http://localhost:5000/deleteprod/${id}`)
  }
  posttotalsales(data:any):Observable<any>{
    return this._http.post('http://localhost:5000/totalsales',data)
  }
  totalsales():Observable<any>{
     return this._http.get('http://localhost:5000/totalsales')
  }
  deletetotalsales():Observable<any>{
    return this._http.delete('http://localhost:5000/totalsales')
 }
  category(category:any):Observable<any>{
    return this._http.get(`http://localhost:5000/category/${category}`)
  }
  adddeleteditem(data:any):Observable<any>{
    return this._http.post('http://localhost:5000/adddeleted',data)
  }
  getdeleteditem():Observable<any>{
    return this._http.get('http://localhost:5000/deleteditem')
  }
  deletedDataAll():Observable<any>{
    return this._http.delete('http://localhost:5000/deletedDataAll')
 }
 deletedDataOne(id:any):Observable<any>{
  return this._http.delete(`http://localhost:5000/deletedDataOne/${id}`)
}
updateDeletedItem(id:any,data:any):Observable<any>{
  return this._http.patch(`http://localhost:5000/updateDeletedItem/${id}`,data)
}


}
