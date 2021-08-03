import { CrudService } from '../crud.service'; 
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router, ActivatedRoute, Params} from '@angular/router'; 
import { CrudService } from '../crud.service';

export class UserComponent implements OnInit {
  id:any;
  user:any;
  
  constructor(private activatedRoute: ActivatedRoute, private crudservice: CrudService) {
    //getting and storing dynamic ID
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //Single User WEB API
   // Initialize Params Object
   var myFormData = new FormData();
       
   // Begin assigning parameters
 
   myFormData.append('userid', this.id);
 
   //user details post request
   this.crudservice.getsingleuser(myFormData);
   setTimeout(()=>{ 
   this.user = this.crudservice.singleuserdata;
  }, 100);
  }
  ngOnInit(): void {
  }
  loaddata()
{
  //Get all usera details  
  this.crudservice.getusers().subscribe((res: any[])=>{
          
    this.data = res;
  });
}  
//Delete User
deleteuser(id)
{
  if(confirm("Are you sure to delete?")) {
  // Initialize Params Object
  var myFormData = new FormData();
   
      
  // Begin assigning parameters
  myFormData.append('deleteid', id);
  this.crudservice.deleteuser(myFormData);
  //sweetalert message popup
  Swal.fire({
    title: 'Hurray!!',
    text:   "User has been deleted successfully",
    icon: 'success'
  });
  this.loaddata();
}
}

