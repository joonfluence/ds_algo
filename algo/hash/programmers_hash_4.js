function solution(genres, plays) {
  const answer = [];
  const songs = [];
  let obj = {};
  const len = genres.length || plays.length;

  for (let i = 0; i < len; i++) {
    obj = {};
    obj.index = i;
    obj.genre = genres[i];
    obj.play = plays[i];
    songs.push(obj);
  }

  // 이번에는 객체의 genre별 합계 값을 기준으로 sort해보자.
  console.log(songs);

  let genrePlayCnt = [];
  songs.forEach((song) => {
    let thisGenre = genrePlayCnt.find(
      (genrePlay) => genrePlay.genre === song.genre
    );
    if (!thisGenre) {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    } else {
      thisGenre.play += song.play;
    }
  });

  genrePlayCnt.sort((a, b) => b.play - a.play);
  console.log(genrePlayCnt);

  // 객체의 plays를 기준으로 sort해보자.

  genrePlayCnt.forEach((genrePlay) => {
    // pop => classic
    // 기본적으로 최다 장르의 값으로 정렬된 상태에서 그 순서부터 시작하여
    // 장르의 값이 같은 경우를 배열로 넣고,
    // 해당 배열을 sort하면 해당 장르의 최다 플레이 순으로 정렬됨
    // 그 후, 해당 배열의 0번째, 1번째 인덱스 값을 answer에 push해 줄 것

    let thisGenreSongs = songs.filter((song) => song.genre === genrePlay.genre);
    thisGenreSongs.sort((a, b) => b.play - a.play);
    answer.push(thisGenreSongs[0].index);
    if (thisGenreSongs.length > 1) {
      answer.push(thisGenreSongs[1].index);
    }
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
