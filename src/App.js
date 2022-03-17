import './App.css';
import {
  PostingWrapBox,
  PostingLi,
  PostingUl,
  PostingBox,
  PostingImg,
} from './style/styledPosting';

function App() {
  return (
    <div className='App'>
      <PostingWrapBox>
        <PostingUl>
          <PostingLi>
            <span>채용 공고 카드</span>
            <PostingBox>
              <ul>
                <li id='boxFirst'></li>
                <li id='boxSecond'></li>
                <li id='boxThird'></li>
              </ul>
            </PostingBox>
          </PostingLi>
        </PostingUl>
      </PostingWrapBox>
    </div>
  );
}

export default App;
