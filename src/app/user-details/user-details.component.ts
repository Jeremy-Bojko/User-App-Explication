import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usersList } from '../../users-data';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  currentUser;
  monAutreImportUser = usersList;
  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('Info Object route : ', this.route);
    console.log('Info object Param : ', this.route.snapshot.paramMap);
    // J'extrais de l'url la valeur du paramètre 'coco' 
    // pour avoir l'uuid du user sur lequel j'ai cliqué
    const uuidUser = this.route.snapshot.paramMap.get('coco');
    console.log(uuidUser);
    // je cherche dans mon tableau de user, le user 
    //  ayant le même uuid que celui que j'ai récup 
    //  dans l'url (je me sert de la méthode find)
    this.currentUser = this.monAutreImportUser.find(x => x.login.uuid == uuidUser);
    console.log(this.currentUser);
  }

}
