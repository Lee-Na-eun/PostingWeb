import './App.css';
import {
  PostingWrapBox,
  PostingLi,
  PostingUl,
  PostingBox,
  PostingImg,
  PostingBoxFirst,
  PostingBoxSecond,
  PostingBoxThird,
} from './style/styledPosting';

function App() {
  return (
    <div className='App'>
      <PostingWrapBox>
        <PostingUl>
          {/* PostingLi 반복해주면 됨 */}
          <PostingLi>
            <span>채용 공고 카드</span>
            <PostingBox>
              <ul>
                <PostingBoxFirst></PostingBoxFirst>
                <PostingBoxSecond>
                  <div>
                    <h3>인디밴드 앨범 자켓 그래픽 디자이너 구인(2년차 이상)</h3>
                    <span>인디인디 엔터</span>
                  </div>
                  <div>
                    <div id='tag'>
                      Tag: <span>Design</span>
                      <span>Graphic</span>
                    </div>
                    <div id='country'>Korea, Republic of</div>
                  </div>
                </PostingBoxSecond>
                <PostingBoxThird>
                  <div id='bookmark'></div>
                  <div id='title'>
                    <p>급여</p>
                    <p>채용 기간</p>
                    <p>지원자</p>
                  </div>
                  <div id='descript'>
                    <p>추후 협의</p>
                    <p>D- 14일(2022-04-05)</p>
                    <p>
                      12명 <span>15T03:58:51:5792</span>
                    </p>
                  </div>
                </PostingBoxThird>
              </ul>
            </PostingBox>
          </PostingLi>
          {/* PostingLi 반복해주면 됨 */}
          <PostingLi>
            <span>채용 공고 카드</span>
            <PostingBox>
              <ul>
                <PostingBoxFirst></PostingBoxFirst>
                <PostingBoxSecond>
                  <div>
                    <h3>인디밴드 앨범 자켓 그래픽 디자이너 구인(2년차 이상)</h3>
                    <span>인디인디 엔터</span>
                  </div>
                  <div>
                    <div id='tag'>
                      Tag: <span>Design</span>
                      <span>Graphic</span>
                    </div>
                    <div id='country'>Korea, Republic of</div>
                  </div>
                </PostingBoxSecond>
                <PostingBoxThird>
                  <div id='bookmark'></div>
                  <div id='title'>
                    <p>급여</p>
                    <p>채용 기간</p>
                    <p>지원자</p>
                  </div>
                  <div id='descript'>
                    <p>추후 협의</p>
                    <p>D- 14일(2022-04-05)</p>
                    <p>
                      12명 <span>15T03:58:51:5792</span>
                    </p>
                  </div>
                </PostingBoxThird>
              </ul>
            </PostingBox>
          </PostingLi>
          {/* PostingLi 반복해주면 됨 */}
        </PostingUl>
      </PostingWrapBox>
    </div>
  );
}

export default App;
