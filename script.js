function changeImg1() {
    fadeAndChange('change', 'https://www.topgear.com/sites/default/files/news-listicle/image/evade-sls.jpg');
    fadeAndChange('change2', 'https://images3.alphacoders.com/120/1203076.jpg');
  }
  
  function changeImg2() {
    fadeAndChange('change', 'https://wallpapersok.com/images/high/explore-a-retrofuturistic-digital-world-of-cyberpunk-extxfxterm4bfbwb.jpg');
    fadeAndChange('change2', 'https://cdn.wccftech.com/wp-content/uploads/2023/07/Cyberpunk-2077-Project-AI.jpg');
  }
  
  function changeImg3() {
    fadeAndChange('change', 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/cyberpunk-2077-motorcycle.jpg');
    fadeAndChange('change2', 'https://cdnb.artstation.com/p/assets/images/images/020/057/175/large/tarmo-juhola-cyberpunkcity-kopio.jpg?1566192051');
  }
  
  function fadeAndChange(id, newSrc) {
    const img = document.getElementById(id);
    img.classList.add('hidden');
  
    setTimeout(() => {
      img.src = newSrc;
      img.onload = () => {
        img.classList.remove('hidden');
      };
    }, 300);
  }
