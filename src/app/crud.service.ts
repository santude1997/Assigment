import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData:any;
  constructor(private http:HttpClient) { }
  //get all users  details
  public getusers()
      {
        
          return this.http.get('http://localhost/users.php');
      }
  //add new user    
  public adduser(userData)
  {
    return this.http.post('http://localhost/users.php/'
  , userData).subscribe((res: Response) => {
    this.getusers();
  });
  }
  public deleteuser(userid)
  {
    return this.http.post('http://localhost/users.php/'
    , userid).subscribe((res: Response) => {});
  }
    userid:any;
    singleuserdata:any;
    //get single user
    public getsingleuser(userid)
    {
      return this.http.post('http://localhost/users.php/'
      , userid).subscribe((res: Response) => {
        this.singleuserdata = res[0]; 
      });

      public updateuser(userid)
      {
        return this.http.post('http://localhost/users.php/'
        , userid).subscribe((res: Response) => {});
      }
  
}
