document.getElementById('scrollUp').addEventListener('click', () => {
    scrollPage('up');
  });
  
  document.getElementById('scrollDown').addEventListener('click', () => {
    scrollPage('down');
  });
  
  function scrollPage(direction) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: scrollToDirection,
        args: [direction]
      });
    });
  }
  
  function scrollToDirection(direction) {
    if (direction === 'up') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else if (direction === 'down') {
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    }
  }
  