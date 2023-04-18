function vimeoVideoStart(targetID) {
  var target = $('#' + targetID);

  var player = new Vimeo.Player(targetID);

  var settings = {
    pause: true,
    volume: 0,
    fullScreen: false
  };

  var controls = target.find('.smrt-video-blocks-controls');

  var playBtn = controls.find('.smrt-video-blocks-play');
  var volumeDownBtn = controls.find('.smrt-video-blocks-volume-down');
  var volumeUpBtn = controls.find('.smrt-video-blocks-volume-up');
  var fullScreenBtn = controls.find('.smrt-video-blocks-fullscreen');

  playBtn.click(function () {
    vimeoPlay($(this), player, target, settings, volumeDownBtn, volumeUpBtn);
  });
  volumeDownBtn.click(function () {
    vimeoVolumeDown(player, settings);
  });
  volumeUpBtn.click(function () {
    vimeoVolumeUp(player, settings);
  });
  fullScreenBtn.click(function () {
    vimeoFullScreen($(this), target, settings);
  });
};

function vimeoPlay(thisBtn, player, target, settings, volumeDownBtn, volumeUpBtn) {
  if (!settings.pause) {
    player.pause();
    volumeDownBtn.hide();
    volumeUpBtn.hide();
    target.removeClass('smrt-video-playing');
    settings.pause = true;
  } else {
    player.play();
    volumeDownBtn.fadeIn();
    volumeUpBtn.fadeIn();
    target.addClass('smrt-video-playing');
    settings.pause = false;
  };
  thisBtn.find('span').toggle();
};

function vimeoVolumeDown(player, settings) {
  settings.volume -= 0.1;
  if (settings.volume < 0) {
    settings.volume = 0;
  };
  player.setVolume(settings.volume);
};

function vimeoVolumeUp(player, settings) {
  settings.volume += 0.1;
  if (settings.volume > 1) {
    settings.volume = 1;
  };
  player.setVolume(settings.volume);
};

function vimeoFullScreen(thisBtn, target, settings) {
  if (!settings.fullScreen) {
    $('body').addClass('smrt-vimeo-fullscreen');
    target.addClass('fullscreen');
    settings.fullScreen = true;
  } else {
    $('body').removeClass('smrt-vimeo-fullscreen');
    target.removeClass('fullscreen');
    settings.fullScreen = false;
  };
  thisBtn.find('span').toggle();
};
