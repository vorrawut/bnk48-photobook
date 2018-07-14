import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'app-bnk-girl-list',
  templateUrl: './bnk-girl-list.component.html',
  styleUrls: ['./bnk-girl-list.component.css']
})
export class BnkGirlListComponent implements OnInit {

  members: Member[] = [{
    '_id': '5b496ebdee32d9dd50a353e1',
    'name': 'Cherprang',
    'imgUrl': 'https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg',
    'instagramId': 'cherprang.bnk48official'
  },
  {
    '_id': '5b496ebdee32d9dd50a353e2',
    'name': 'Orn',
    'imgUrl': 'https://media-spiceee.net/uploads/content/image/1643617/large_3ec1f891-1a5c-4905-b298-4cb27667320c.jpg',
    'instagramId': 'orn.bnk48official'
  },
  {
    '_id': '5b496ebdee32d9dd50a353e3',
    'name': 'Music',
    'imgUrl': 'https://i.pinimg.com/736x/3a/3d/56/3a3d569c3186f168e30256b46095e8de.jpg',
    'instagramId': 'music.bnk48official'
  }];

  constructor() { }

  ngOnInit() {
  }

}
