import React, { useState } from 'react';
import styled from 'styled-components';

const FormComponent = () => {
  // グループ名と画像URLの状態を管理
  const [groupName, setGroupName] = useState('');
  const [groupImage, setGroupImage] = useState(null);

  // フォーム送信時の処理
  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルトのフォーム送信を防止

    // フォームデータの作成
    const formData = new FormData();
    formData.append('groupName', groupName);
    if(groupImage) {
      formData.append('groupImage', groupImage);
    }

    // フォームデータの送信処理（例：API呼び出し）をここに実装
    console.log('Form submitted. Group Name:', groupName);
    // 実際には、ここでAPIを呼び出してフォームデータを送信します

    // フォームの入力をリセット
    setGroupName('');
    setGroupImage(null);
  };

  // 画像ファイルの変更時に呼び出される関数
  const handleImageChange = (e) => {
    setGroupImage(e.target.files[0]); // 最初のファイルを選択
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="groupName">グループ名:</label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="groupImage">グループ画像:</label>
        <input
          type="file"
          id="groupImage"
          onChange={handleImageChange}
          accept="image/*" // 画像ファイルのみ受け入れる
        />
      </div>
      <button type="submit">グループ作成</button>
    </form>
  );
};

export default FormComponent;
