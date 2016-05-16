/*         Canvas web full     */
 function init() 
 
 {

      var canvas = document.getElementById("canvas_footer");
      var ctx = canvas.getContext("2d");

      draw(ctx);
}

function draw(ctx) 
{

      // capa1/Rectngulo
      ctx.save();/*
      ctx.beginPath();
      ctx.moveTo(1024.0, 140.8);
      ctx.lineTo(0.0, 140.8);
      ctx.lineTo(0.0, 111.3);
      ctx.lineTo(1024.0, 111.3);
      ctx.lineTo(1024.0, 140.8);
      ctx.closePath();*/
      ctx.fillStyle = "rgb(141, 34, 66)";
      ctx.fill();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(507.5, 33.1);
      ctx.bezierCurveTo(507.5, 33.3, 507.6, 33.5, 507.8, 33.7);
      ctx.lineTo(507.8, 33.7);
      ctx.lineTo(512.2, 38.3);
      ctx.lineTo(512.2, 38.3);
      ctx.bezierCurveTo(512.3, 38.4, 512.6, 38.5, 512.8, 38.5);
      ctx.bezierCurveTo(513.1, 38.5, 513.3, 38.4, 513.4, 38.3);
      ctx.lineTo(513.4, 38.3);
      ctx.lineTo(517.8, 33.7);
      ctx.lineTo(517.8, 33.7);
      ctx.bezierCurveTo(518.0, 33.5, 518.1, 33.3, 518.1, 33.1);
      ctx.lineTo(518.1, 31.7);
      ctx.lineTo(518.0, 31.7);
      ctx.lineTo(516.5, 30.2);
      ctx.lineTo(513.4, 33.3);
      ctx.lineTo(514.8, 34.8);
      ctx.bezierCurveTo(515.0, 34.9, 515.0, 35.2, 514.8, 35.3);
      ctx.bezierCurveTo(514.7, 35.5, 514.4, 35.5, 514.3, 35.3);
      ctx.lineTo(512.8, 33.9);
      ctx.lineTo(512.8, 33.9);
      ctx.lineTo(512.8, 33.9);
      ctx.lineTo(511.4, 35.3);
      ctx.bezierCurveTo(511.2, 35.5, 511.0, 35.5, 510.8, 35.3);
      ctx.bezierCurveTo(510.6, 35.2, 510.6, 34.9, 510.8, 34.8);
      ctx.lineTo(512.2, 33.3);
      ctx.lineTo(509.2, 30.2);
      ctx.lineTo(507.6, 31.7);
      ctx.lineTo(507.5, 31.8);
      ctx.lineTo(507.5, 33.1);
      ctx.lineTo(507.5, 33.1);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado compuesto
      ctx.beginPath();

      // capa1/Trazado compuesto/Trazado
      ctx.moveTo(517.4, 107.6);
      ctx.lineTo(520.1, 88.9);
      ctx.lineTo(526.6, 88.9);
      ctx.bezierCurveTo(526.6, 75.4, 525.0, 65.5, 522.4, 58.5);
      ctx.lineTo(525.6, 51.8);
      ctx.bezierCurveTo(525.8, 51.4, 525.9, 51.0, 525.9, 50.7);
      ctx.lineTo(525.9, 35.8);
      ctx.bezierCurveTo(525.9, 34.5, 524.9, 33.3, 523.7, 33.0);
      ctx.lineTo(519.9, 32.2);
      ctx.lineTo(519.9, 33.0);
      ctx.bezierCurveTo(519.9, 33.8, 519.6, 34.5, 519.1, 35.0);
      ctx.lineTo(519.1, 35.0);
      ctx.lineTo(513.7, 40.6);
      ctx.lineTo(513.7, 47.8);
      ctx.bezierCurveTo(514.5, 48.1, 515.1, 49.0, 515.1, 49.9);
      ctx.bezierCurveTo(515.1, 51.2, 514.1, 52.2, 512.8, 52.2);
      ctx.bezierCurveTo(511.5, 52.2, 510.5, 51.2, 510.5, 49.9);
      ctx.bezierCurveTo(510.5, 49.0, 511.1, 48.1, 511.9, 47.8);
      ctx.lineTo(511.9, 40.6);
      ctx.lineTo(506.5, 35.0);
      ctx.lineTo(506.5, 35.0);
      ctx.bezierCurveTo(506.0, 34.5, 505.7, 33.8, 505.7, 33.0);
      ctx.lineTo(505.7, 32.2);
      ctx.lineTo(502.0, 33.0);
      ctx.bezierCurveTo(500.8, 33.3, 499.8, 34.5, 499.8, 35.8);
      ctx.lineTo(499.8, 50.6);
      ctx.bezierCurveTo(499.8, 51.0, 499.9, 51.4, 500.1, 51.8);
      ctx.lineTo(503.2, 58.5);
      ctx.bezierCurveTo(500.7, 65.5, 499.1, 75.4, 499.1, 88.9);
      ctx.lineTo(505.6, 88.9);
      ctx.lineTo(508.2, 107.6);
      ctx.bezierCurveTo(506.8, 108.2, 504.3, 109.7, 504.3, 111.3);
      ctx.lineTo(521.3, 111.3);
      ctx.bezierCurveTo(521.3, 109.7, 518.9, 108.2, 517.4, 107.6);
      ctx.closePath();

      // capa1/Trazado compuesto/Trazado
      ctx.moveTo(502.5, 79.9);
      ctx.bezierCurveTo(503.1, 71.4, 503.8, 68.7, 503.8, 68.7);
      ctx.bezierCurveTo(504.1, 67.6, 504.6, 66.9, 505.7, 66.8);
      ctx.lineTo(505.7, 66.8);
      ctx.lineTo(509.5, 66.8);
      ctx.lineTo(509.5, 66.1);
      ctx.bezierCurveTo(508.7, 65.8, 508.0, 65.3, 507.7, 64.6);
      ctx.bezierCurveTo(507.7, 64.5, 507.7, 64.4, 507.7, 64.4);
      ctx.bezierCurveTo(507.7, 62.9, 508.9, 61.7, 510.4, 61.7);
      ctx.bezierCurveTo(511.0, 61.7, 511.6, 61.9, 512.1, 62.3);
      ctx.lineTo(513.5, 62.3);
      ctx.bezierCurveTo(514.0, 61.9, 514.6, 61.7, 515.2, 61.7);
      ctx.bezierCurveTo(516.7, 61.7, 517.9, 62.9, 517.9, 64.4);
      ctx.bezierCurveTo(517.9, 64.4, 517.9, 64.5, 517.9, 64.6);
      ctx.bezierCurveTo(517.6, 65.3, 516.9, 65.8, 516.1, 66.1);
      ctx.lineTo(516.1, 66.8);
      ctx.lineTo(519.9, 66.8);
      ctx.lineTo(519.9, 66.8);
      ctx.bezierCurveTo(521.0, 66.9, 521.6, 67.6, 521.8, 68.7);
      ctx.bezierCurveTo(521.8, 68.7, 522.5, 71.4, 523.1, 79.9);
      ctx.lineTo(502.5, 79.9);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(511.7, 69.6);
      ctx.lineTo(513.9, 69.6);
      ctx.lineTo(513.9, 72.3);
      ctx.lineTo(516.6, 72.3);
      ctx.lineTo(516.6, 74.5);
      ctx.lineTo(513.9, 74.5);
      ctx.lineTo(513.9, 77.2);
      ctx.lineTo(511.7, 77.2);
      ctx.lineTo(511.7, 74.5);
      ctx.lineTo(509.0, 74.5);
      ctx.lineTo(509.0, 72.3);
      ctx.lineTo(511.7, 72.3);
      ctx.lineTo(511.7, 69.6);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(512.8, 64.1);
      ctx.bezierCurveTo(512.5, 65.3, 511.5, 66.1, 510.3, 66.1);
      ctx.lineTo(510.3, 66.8);
      ctx.lineTo(515.3, 66.8);
      ctx.lineTo(515.3, 66.1);
      ctx.bezierCurveTo(514.1, 66.1, 513.1, 65.3, 512.8, 64.1);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado compuesto
      ctx.beginPath();

      // capa1/Trazado compuesto/Trazado
      ctx.moveTo(520.0, 15.0);
      ctx.lineTo(512.8, 11.4);
      ctx.lineTo(505.7, 15.0);
      ctx.lineTo(507.4, 18.7);
      ctx.bezierCurveTo(506.7, 19.8, 506.3, 21.1, 506.3, 22.4);
      ctx.bezierCurveTo(506.3, 26.1, 509.3, 29.0, 512.9, 29.1);
      ctx.bezierCurveTo(516.6, 29.0, 519.5, 26.1, 519.5, 22.4);
      ctx.bezierCurveTo(519.5, 21.0, 519.1, 19.7, 518.3, 18.6);
      ctx.lineTo(520.0, 15.0);
      ctx.closePath();

      // capa1/Trazado compuesto/Trazado
      ctx.moveTo(514.4, 15.4);
      ctx.lineTo(513.4, 15.4);
      ctx.lineTo(513.4, 16.5);
      ctx.lineTo(512.2, 16.5);
      ctx.lineTo(512.2, 15.4);
      ctx.lineTo(511.2, 15.4);
      ctx.lineTo(511.2, 14.3);
      ctx.lineTo(512.2, 14.3);
      ctx.lineTo(512.2, 13.2);
      ctx.lineTo(513.4, 13.2);
      ctx.lineTo(513.4, 14.3);
      ctx.lineTo(514.4, 14.3);
      ctx.lineTo(514.4, 15.4);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo

      // capa1/Grupo/Grupo
      ctx.save();

      // capa1/Grupo/Grupo/Trazado compuesto
      ctx.save();
      ctx.beginPath();

      // capa1/Grupo/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(157.8, 0.0);
      ctx.bezierCurveTo(161.2, 0.0, 166.7, 1.4, 169.8, 4.8);
      ctx.lineTo(165.7, 12.7);
      ctx.bezierCurveTo(163.8, 10.4, 161.0, 8.9, 157.8, 8.9);
      ctx.bezierCurveTo(154.7, 8.9, 151.9, 10.4, 150.1, 12.6);
      ctx.lineTo(145.9, 5.0);
      ctx.bezierCurveTo(149.4, 1.4, 154.3, 0.0, 157.8, 0.0);

      // capa1/Grupo/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(156.6, 8.0);
      ctx.lineTo(159.0, 8.0);
      ctx.lineTo(159.0, 5.6);
      ctx.lineTo(161.4, 5.6);
      ctx.lineTo(161.4, 3.3);
      ctx.lineTo(159.0, 3.3);
      ctx.lineTo(159.0, 0.9);
      ctx.lineTo(156.6, 0.9);
      ctx.lineTo(156.6, 3.3);
      ctx.lineTo(154.3, 3.3);
      ctx.lineTo(154.3, 5.6);
      ctx.lineTo(156.6, 5.6);
      ctx.lineTo(156.6, 8.0);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(165.4, 19.3);
      ctx.bezierCurveTo(165.4, 23.5, 162.0, 26.9, 157.8, 26.9);
      ctx.bezierCurveTo(153.6, 26.9, 150.2, 23.5, 150.2, 19.3);
      ctx.bezierCurveTo(150.2, 15.1, 153.6, 11.7, 157.8, 11.7);
      ctx.bezierCurveTo(162.0, 11.7, 165.4, 15.1, 165.4, 19.3);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(182.8, 60.3);
      ctx.lineTo(175.5, 36.2);
      ctx.bezierCurveTo(174.6, 33.4, 171.3, 28.5, 165.4, 28.5);
      ctx.lineTo(150.9, 28.5);
      ctx.bezierCurveTo(144.9, 28.5, 141.9, 33.4, 141.1, 36.2);
      ctx.lineTo(138.4, 43.1);
      ctx.lineTo(129.2, 36.2);
      ctx.bezierCurveTo(124.8, 32.9, 120.4, 38.6, 124.9, 42.0);
      ctx.lineTo(137.8, 51.8);
      ctx.lineTo(137.8, 51.8);
      ctx.bezierCurveTo(139.6, 53.1, 142.5, 52.8, 143.4, 49.8);
      ctx.lineTo(147.0, 40.4);
      ctx.lineTo(149.4, 40.4);
      ctx.lineTo(138.1, 79.8);
      ctx.lineTo(148.7, 79.8);
      ctx.lineTo(148.7, 108.2);
      ctx.bezierCurveTo(148.7, 113.5, 156.6, 113.5, 156.6, 108.2);
      ctx.lineTo(156.6, 79.6);
      ctx.lineTo(159.8, 79.6);
      ctx.lineTo(159.8, 108.2);
      ctx.bezierCurveTo(159.8, 113.4, 167.7, 113.4, 167.7, 108.2);
      ctx.lineTo(167.7, 79.8);
      ctx.lineTo(178.2, 79.8);
      ctx.lineTo(166.8, 40.4);
      ctx.lineTo(169.5, 40.4);
      ctx.lineTo(176.1, 62.6);
      ctx.bezierCurveTo(177.7, 67.6, 184.3, 65.5, 182.8, 60.3);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(128.3, 31.1);
      ctx.lineTo(128.3, 19.5);
      ctx.lineTo(126.6, 19.5);
      ctx.lineTo(126.6, 9.5);
      ctx.lineTo(125.2, 9.5);
      ctx.lineTo(125.2, 19.5);
      ctx.lineTo(123.5, 19.5);
      ctx.lineTo(123.5, 31.1);
      ctx.lineTo(121.2, 31.1);
      ctx.lineTo(121.2, 33.7);
      ctx.lineTo(130.6, 33.7);
      ctx.lineTo(130.6, 31.1);
      ctx.lineTo(128.3, 31.1);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo
      ctx.restore();

      // capa1/Grupo/Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(359.5, 32.7);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(366.3, 32.7);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(362.6, 80.1);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(380.5, 23.4);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(366.7, 16.4);
      ctx.lineTo(366.7, 16.4);
      ctx.bezierCurveTo(365.0, 17.9, 363.8, 20.3, 363.8, 22.8);
      ctx.bezierCurveTo(363.8, 27.4, 367.5, 31.2, 372.1, 31.2);
      ctx.bezierCurveTo(374.6, 31.2, 376.8, 30.1, 378.4, 28.4);
      ctx.lineTo(378.5, 28.2);
      ctx.lineTo(366.7, 16.4);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(371.4, 14.3);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(380.4, 23.4);
      ctx.bezierCurveTo(380.4, 23.2, 380.5, 23.0, 380.5, 22.8);
      ctx.bezierCurveTo(380.5, 18.2, 376.7, 14.5, 372.1, 14.5);
      ctx.bezierCurveTo(371.9, 14.5, 371.7, 14.5, 371.5, 14.5);
      ctx.lineTo(380.4, 23.4);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(366.7, 16.4);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(384.1, 48.4);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(384.6, 53.0);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(384.1, 66.0);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(387.0, 53.7);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(390.9, 53.0);
      ctx.lineTo(390.9, 42.3);
      ctx.bezierCurveTo(390.9, 42.3, 391.1, 39.0, 388.5, 36.0);
      ctx.bezierCurveTo(385.2, 32.5, 381.0, 32.6, 381.0, 32.6);
      ctx.lineTo(372.1, 32.6);
      ctx.lineTo(372.1, 32.6);
      ctx.lineTo(363.2, 32.6);
      ctx.bezierCurveTo(363.2, 32.6, 359.0, 32.5, 355.8, 36.0);
      ctx.bezierCurveTo(353.1, 39.0, 353.3, 42.3, 353.3, 42.3);
      ctx.lineTo(353.3, 65.9);
      ctx.lineTo(353.3, 68.5);
      ctx.bezierCurveTo(353.3, 70.5, 354.9, 72.6, 356.8, 72.6);
      ctx.bezierCurveTo(358.6, 72.6, 360.1, 71.0, 360.1, 69.0);
      ctx.lineTo(360.1, 68.5);
      ctx.lineTo(360.1, 45.0);
      ctx.lineTo(361.9, 45.0);
      ctx.lineTo(361.9, 80.1);
      ctx.lineTo(371.1, 80.1);
      ctx.lineTo(371.1, 70.8);
      ctx.lineTo(372.1, 70.8);
      ctx.lineTo(372.1, 70.8);
      ctx.lineTo(373.1, 70.8);
      ctx.lineTo(373.1, 102.7);
      ctx.lineTo(373.1, 106.5);
      ctx.bezierCurveTo(373.1, 109.0, 375.1, 111.1, 377.6, 111.1);
      ctx.bezierCurveTo(380.2, 111.1, 382.2, 109.0, 382.2, 106.5);
      ctx.lineTo(382.3, 101.8);
      ctx.lineTo(382.3, 45.0);
      ctx.lineTo(384.1, 45.0);
      ctx.lineTo(384.1, 53.0);
      ctx.lineTo(390.9, 53.0);
      ctx.lineTo(390.9, 53.0);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(384.0, 62.0);
      ctx.lineTo(384.1, 68.6);
      ctx.bezierCurveTo(384.1, 70.6, 385.7, 72.6, 387.5, 72.6);
      ctx.bezierCurveTo(389.4, 72.6, 390.9, 71.1, 390.9, 69.1);
      ctx.lineTo(390.9, 68.6);
      ctx.lineTo(390.8, 62.0);
      ctx.lineTo(384.0, 62.0);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(388.0, 61.3);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(384.1, 72.7);
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(361.9, 94.3);
      ctx.lineTo(361.9, 106.5);
      ctx.bezierCurveTo(361.9, 109.0, 364.0, 111.1, 366.5, 111.1);
      ctx.bezierCurveTo(369.0, 111.1, 371.1, 109.0, 371.1, 106.5);
      ctx.lineTo(371.2, 94.3);
      ctx.lineTo(361.9, 94.3);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo
      ctx.restore();

      // capa1/Grupo/Trazado compuesto
      ctx.save();
      ctx.beginPath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(890.4, 23.6);
      ctx.lineTo(984.8, 23.6);
      ctx.bezierCurveTo(992.1, 23.6, 998.1, 29.8, 998.1, 37.1);
      ctx.lineTo(998.1, 78.1);
      ctx.lineTo(1006.0, 78.1);
      ctx.lineTo(1006.0, 88.6);
      ctx.bezierCurveTo(1006.0, 93.9, 999.8, 98.2, 992.3, 98.2);
      ctx.lineTo(984.8, 98.2);
      ctx.lineTo(979.2, 98.2);
      ctx.bezierCurveTo(978.6, 90.9, 972.5, 85.1, 965.2, 85.1);
      ctx.bezierCurveTo(957.7, 85.1, 951.5, 90.9, 950.9, 98.2);
      ctx.lineTo(896.2, 98.2);
      ctx.bezierCurveTo(895.7, 90.9, 889.5, 85.1, 882.0, 85.1);
      ctx.bezierCurveTo(874.7, 85.1, 868.5, 90.9, 867.9, 98.2);
      ctx.lineTo(860.6, 98.2);
      ctx.lineTo(855.2, 98.2);
      ctx.bezierCurveTo(847.7, 98.2, 841.5, 93.9, 841.5, 88.6);
      ctx.lineTo(841.5, 87.5);
      ctx.bezierCurveTo(841.5, 83.4, 845.6, 79.8, 851.3, 78.5);
      ctx.lineTo(877.1, 37.1);
      ctx.bezierCurveTo(881.0, 30.7, 883.1, 23.6, 890.4, 23.6);
      ctx.lineTo(890.4, 23.6);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(965.2, 86.6);
      ctx.bezierCurveTo(958.4, 86.6, 953.0, 92.0, 953.0, 98.7);
      ctx.bezierCurveTo(953.0, 105.5, 958.4, 110.9, 965.2, 110.9);
      ctx.bezierCurveTo(971.9, 110.9, 977.3, 105.5, 977.3, 98.7);
      ctx.bezierCurveTo(977.3, 92.0, 971.9, 86.6, 965.2, 86.6);
      ctx.lineTo(965.2, 86.6);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(882.7, 87.5);
      ctx.bezierCurveTo(876.0, 87.5, 870.6, 92.9, 870.6, 99.7);
      ctx.bezierCurveTo(870.6, 106.4, 876.0, 111.8, 882.7, 111.8);
      ctx.bezierCurveTo(889.5, 111.8, 894.9, 106.4, 894.9, 99.7);
      ctx.bezierCurveTo(894.9, 92.9, 889.5, 87.5, 882.7, 87.5);
      ctx.lineTo(882.7, 87.5);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(922.6, 61.7);
      ctx.lineTo(922.6, 70.8);
      ctx.lineTo(913.5, 70.8);
      ctx.lineTo(913.5, 77.8);
      ctx.lineTo(922.6, 77.8);
      ctx.lineTo(922.6, 87.1);
      ctx.lineTo(929.8, 87.1);
      ctx.lineTo(929.8, 77.8);
      ctx.lineTo(938.9, 77.8);
      ctx.lineTo(938.9, 70.8);
      ctx.lineTo(929.8, 70.8);
      ctx.lineTo(929.8, 61.7);
      ctx.lineTo(922.6, 61.7);
      ctx.lineTo(922.6, 61.7);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(903.7, 12.2);
      ctx.lineTo(915.9, 12.2);
      ctx.bezierCurveTo(918.3, 12.2, 920.4, 13.1, 920.4, 14.3);
      ctx.lineTo(920.4, 19.9);
      ctx.bezierCurveTo(920.4, 21.0, 918.3, 21.9, 915.9, 21.9);
      ctx.lineTo(903.7, 21.9);
      ctx.bezierCurveTo(901.3, 21.9, 899.2, 21.0, 899.2, 19.9);
      ctx.lineTo(899.2, 14.3);
      ctx.bezierCurveTo(899.2, 13.1, 901.3, 12.2, 903.7, 12.2);
      ctx.lineTo(903.7, 12.2);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(895.3, 36.3);
      ctx.bezierCurveTo(892.5, 36.3, 890.2, 39.7, 890.2, 43.5);
      ctx.lineTo(890.2, 48.5);
      ctx.bezierCurveTo(890.2, 52.5, 892.5, 55.7, 895.3, 55.7);
      ctx.lineTo(907.3, 55.7);
      ctx.bezierCurveTo(910.1, 55.7, 912.5, 52.5, 912.5, 48.5);
      ctx.lineTo(912.5, 43.5);
      ctx.bezierCurveTo(912.5, 39.7, 910.1, 36.3, 907.3, 36.3);
      ctx.lineTo(895.3, 36.3);
      ctx.lineTo(895.3, 36.3);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(928.4, 36.3);
      ctx.bezierCurveTo(925.3, 36.3, 922.6, 39.7, 922.6, 43.5);
      ctx.lineTo(922.6, 48.5);
      ctx.bezierCurveTo(922.6, 52.5, 925.3, 55.7, 928.4, 55.7);
      ctx.lineTo(941.9, 55.7);
      ctx.bezierCurveTo(945.3, 55.7, 947.9, 52.5, 947.9, 48.5);
      ctx.lineTo(947.9, 43.5);
      ctx.bezierCurveTo(947.9, 39.7, 945.3, 36.3, 941.9, 36.3);
      ctx.lineTo(928.4, 36.3);
      ctx.lineTo(928.4, 36.3);
      ctx.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      ctx.moveTo(962.0, 36.3);
      ctx.bezierCurveTo(958.2, 36.3, 955.0, 39.7, 955.0, 43.5);
      ctx.lineTo(955.0, 48.5);
      ctx.bezierCurveTo(955.0, 52.5, 958.2, 55.7, 962.0, 55.7);
      ctx.lineTo(978.3, 55.7);
      ctx.bezierCurveTo(982.2, 55.7, 985.4, 52.5, 985.4, 48.5);
      ctx.lineTo(985.4, 43.5);
      ctx.bezierCurveTo(985.4, 39.7, 982.2, 36.3, 978.3, 36.3);
      ctx.lineTo(962.0, 36.3);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo
      ctx.restore();

      // capa1/Grupo/Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(272.2, 72.6);
      ctx.lineTo(272.2, 107.7);
      ctx.lineTo(274.2, 107.7);
      ctx.lineTo(274.2, 72.6);
      ctx.lineTo(272.2, 72.6);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(272.7, 17.6);
      ctx.bezierCurveTo(277.0, 17.6, 280.6, 21.1, 280.6, 25.5);
      ctx.bezierCurveTo(280.6, 29.9, 277.0, 33.4, 272.7, 33.4);
      ctx.bezierCurveTo(268.3, 33.4, 264.8, 29.9, 264.8, 25.5);
      ctx.bezierCurveTo(264.8, 21.1, 268.3, 17.6, 272.7, 17.6);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo
      ctx.restore();

      // capa1/Grupo/Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(280.1, 35.0);
      ctx.lineTo(278.4, 35.0);
      ctx.lineTo(273.2, 42.2);
      ctx.lineTo(273.0, 41.9);
      ctx.bezierCurveTo(272.8, 41.6, 269.2, 36.5, 268.1, 35.0);
      ctx.lineTo(266.1, 35.0);
      ctx.bezierCurveTo(265.8, 35.8, 265.7, 36.6, 265.7, 37.5);
      ctx.bezierCurveTo(265.7, 41.6, 269.0, 44.9, 273.1, 44.9);
      ctx.bezierCurveTo(277.2, 44.9, 280.5, 41.6, 280.5, 37.5);
      ctx.bezierCurveTo(280.6, 36.7, 280.4, 35.8, 280.1, 35.0);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo
      ctx.restore();

      // capa1/Grupo/Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(255.2, 69.4);
      ctx.bezierCurveTo(255.2, 74.1, 261.4, 74.1, 261.4, 69.4);
      ctx.lineTo(261.4, 51.3);
      ctx.lineTo(255.2, 51.3);
      ctx.lineTo(255.2, 69.4);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(281.9, 35.0);
      ctx.lineTo(280.7, 35.0);
      ctx.bezierCurveTo(281.0, 35.8, 281.1, 36.6, 281.1, 37.5);
      ctx.bezierCurveTo(281.1, 41.7, 277.8, 45.2, 273.7, 45.5);
      ctx.lineTo(273.7, 51.2);
      ctx.bezierCurveTo(274.6, 51.5, 275.3, 52.3, 275.3, 53.3);
      ctx.bezierCurveTo(275.3, 54.5, 274.3, 55.5, 273.1, 55.5);
      ctx.bezierCurveTo(271.9, 55.5, 270.9, 54.5, 270.9, 53.3);
      ctx.bezierCurveTo(270.9, 52.3, 271.6, 51.5, 272.4, 51.2);
      ctx.lineTo(272.4, 45.5);
      ctx.bezierCurveTo(268.3, 45.2, 265.0, 41.7, 265.0, 37.5);
      ctx.bezierCurveTo(265.0, 36.6, 265.1, 35.8, 265.4, 35.0);
      ctx.lineTo(264.2, 35.0);
      ctx.bezierCurveTo(258.6, 35.0, 254.5, 39.5, 254.5, 45.2);
      ctx.lineTo(254.5, 50.8);
      ctx.lineTo(262.3, 50.8);
      ctx.lineTo(262.3, 45.8);
      ctx.lineTo(263.3, 45.8);
      ctx.lineTo(263.3, 63.2);
      ctx.lineTo(263.3, 63.2);
      ctx.lineTo(282.9, 63.2);
      ctx.lineTo(282.9, 63.2);
      ctx.lineTo(282.9, 45.8);
      ctx.lineTo(283.8, 45.8);
      ctx.lineTo(283.8, 50.8);
      ctx.lineTo(291.4, 50.8);
      ctx.lineTo(291.4, 45.3);
      ctx.bezierCurveTo(291.6, 40.2, 288.0, 35.0, 281.9, 35.0);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(284.9, 69.4);
      ctx.bezierCurveTo(284.9, 74.1, 291.1, 74.1, 291.0, 69.4);
      ctx.lineTo(291.0, 51.3);
      ctx.lineTo(284.9, 51.3);
      ctx.lineTo(284.9, 69.4);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(283.0, 63.7);
      ctx.lineTo(263.4, 63.7);
      ctx.lineTo(263.4, 63.7);
      ctx.lineTo(263.4, 107.7);
      ctx.lineTo(264.8, 107.7);
      ctx.lineTo(264.8, 108.0);
      ctx.bezierCurveTo(264.8, 109.7, 266.2, 111.2, 268.0, 111.2);
      ctx.bezierCurveTo(269.7, 111.2, 271.2, 109.8, 271.2, 108.0);
      ctx.lineTo(271.2, 107.7);
      ctx.lineTo(272.3, 107.7);
      ctx.lineTo(272.3, 72.6);
      ctx.lineTo(274.3, 72.6);
      ctx.lineTo(274.3, 107.7);
      ctx.lineTo(275.3, 107.7);
      ctx.lineTo(275.3, 108.0);
      ctx.bezierCurveTo(275.3, 109.7, 276.7, 111.2, 278.5, 111.2);
      ctx.bezierCurveTo(280.3, 111.2, 281.7, 109.8, 281.7, 108.0);
      ctx.lineTo(281.7, 107.7);
      ctx.lineTo(283.2, 107.7);
      ctx.lineTo(283.0, 63.7);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(32.7, 84.8);
      ctx.lineTo(32.7, 45.9);
      ctx.lineTo(23.2, 45.9);
      ctx.lineTo(23.2, 111.2);
      ctx.lineTo(32.7, 111.2);
      ctx.lineTo(32.7, 93.8);
      ctx.lineTo(111.6, 93.8);
      ctx.lineTo(111.6, 111.2);
      ctx.lineTo(121.2, 111.2);
      ctx.lineTo(121.2, 84.8);
      ctx.lineTo(32.7, 84.8);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(95.2, 25.5);
      ctx.bezierCurveTo(95.2, 29.3, 92.1, 32.3, 88.3, 32.3);
      ctx.bezierCurveTo(84.6, 32.3, 81.5, 29.3, 81.5, 25.5);
      ctx.bezierCurveTo(81.5, 21.7, 84.6, 18.7, 88.3, 18.7);
      ctx.bezierCurveTo(92.1, 18.7, 95.2, 21.7, 95.2, 25.5);
      ctx.fill();

      // capa1/Trazado
      ctx.beginPath();
      ctx.moveTo(39.0, 57.8);
      ctx.bezierCurveTo(42.3, 59.6, 46.4, 58.4, 48.2, 55.1);
      ctx.bezierCurveTo(50.0, 51.7, 48.7, 47.6, 45.4, 45.8);
      ctx.bezierCurveTo(42.1, 44.1, 38.0, 45.3, 36.2, 48.6);
      ctx.bezierCurveTo(34.4, 51.9, 35.7, 56.0, 39.0, 57.8);
      ctx.lineTo(39.0, 57.8);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo

      // capa1/Grupo/Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(35.6, 60.6);
      ctx.lineTo(53.2, 60.6);
      ctx.lineTo(53.2, 81.9);
      ctx.lineTo(35.6, 81.9);
      ctx.lineTo(35.6, 60.6);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(121.2, 66.9);
      ctx.bezierCurveTo(121.2, 63.3, 118.7, 60.6, 114.6, 60.6);
      ctx.lineTo(56.4, 60.6);
      ctx.lineTo(56.4, 81.9);
      ctx.lineTo(121.2, 81.9);
      ctx.lineTo(121.2, 66.9);
      ctx.lineTo(121.2, 66.9);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(102.4, 57.5);
      ctx.lineTo(109.0, 57.5);
      ctx.lineTo(104.2, 40.9);
      ctx.bezierCurveTo(103.4, 38.4, 100.5, 34.0, 95.1, 34.0);
      ctx.lineTo(82.1, 34.0);
      ctx.bezierCurveTo(76.7, 34.0, 74.0, 38.4, 73.3, 40.9);
      ctx.lineTo(69.3, 51.2);
      ctx.lineTo(58.9, 51.2);
      ctx.bezierCurveTo(54.0, 51.2, 54.0, 57.5, 58.9, 57.5);
      ctx.lineTo(71.6, 57.5);
      ctx.lineTo(71.6, 57.5);
      ctx.bezierCurveTo(72.9, 57.5, 74.1, 56.7, 74.7, 55.0);
      ctx.lineTo(78.6, 44.7);
      ctx.lineTo(80.8, 44.7);
      ctx.lineTo(77.5, 57.5);
      ctx.lineTo(97.9, 57.5);
      ctx.lineTo(99.3, 57.5);
      ctx.lineTo(96.4, 44.7);
      ctx.lineTo(98.8, 44.7);
      ctx.lineTo(102.4, 57.5);
      ctx.closePath();
      ctx.fill();

      // capa1/Trazado compuesto
      ctx.beginPath();

      // capa1/Trazado compuesto/Trazado
      ctx.moveTo(708.3, 66.9);
      ctx.lineTo(699.9, 37.0);
      ctx.bezierCurveTo(699.5, 35.5, 698.1, 34.4, 696.5, 34.4);
      ctx.lineTo(681.0, 34.4);
      ctx.lineTo(681.0, 38.4);
      ctx.bezierCurveTo(684.2, 40.5, 685.2, 42.6, 685.2, 46.7);
      ctx.lineTo(683.1, 46.7);
      ctx.lineTo(683.1, 45.7);
      ctx.lineTo(684.2, 45.7);
      ctx.bezierCurveTo(684.2, 43.7, 683.7, 41.5, 681.0, 39.4);
      ctx.lineTo(680.0, 39.4);
      ctx.bezierCurveTo(677.4, 41.5, 676.8, 43.7, 676.8, 45.7);
      ctx.lineTo(677.9, 45.7);
      ctx.lineTo(677.9, 46.7);
      ctx.lineTo(675.8, 46.7);
      ctx.bezierCurveTo(675.8, 42.6, 676.8, 40.5, 680.0, 38.4);
      ctx.lineTo(680.0, 34.4);
      ctx.lineTo(676.1, 34.4);
      ctx.bezierCurveTo(674.5, 34.4, 673.1, 35.5, 672.7, 37.0);
      ctx.lineTo(664.2, 66.9);
      ctx.bezierCurveTo(663.7, 68.8, 664.8, 70.8, 666.7, 71.3);
      ctx.bezierCurveTo(668.6, 71.9, 670.6, 70.8, 671.2, 68.9);
      ctx.lineTo(676.0, 51.6);
      ctx.lineTo(676.0, 106.8);
      ctx.bezierCurveTo(676.0, 109.2, 677.9, 111.1, 680.3, 111.1);
      ctx.bezierCurveTo(682.7, 111.1, 684.6, 109.2, 684.6, 106.8);
      ctx.lineTo(684.6, 77.4);
      ctx.lineTo(687.9, 77.4);
      ctx.lineTo(687.9, 106.8);
      ctx.bezierCurveTo(687.9, 109.2, 689.8, 111.1, 692.2, 111.1);
      ctx.bezierCurveTo(694.5, 111.1, 696.5, 109.2, 696.5, 106.8);
      ctx.lineTo(696.5, 51.2);
      ctx.lineTo(701.4, 68.9);
      ctx.bezierCurveTo(701.9, 70.4, 703.3, 71.5, 704.9, 71.5);
      ctx.bezierCurveTo(705.2, 71.5, 705.5, 71.4, 705.9, 71.3);
      ctx.bezierCurveTo(707.8, 70.8, 708.9, 68.8, 708.3, 66.9);
      ctx.closePath();

      // capa1/Trazado compuesto/Trazado
      ctx.moveTo(694.8, 40.9);
      ctx.lineTo(692.8, 40.9);
      ctx.lineTo(692.8, 43.0);
      ctx.lineTo(691.7, 43.0);
      ctx.lineTo(691.7, 40.9);
      ctx.lineTo(689.6, 40.9);
      ctx.lineTo(689.6, 39.8);
      ctx.lineTo(691.7, 39.8);
      ctx.lineTo(691.7, 37.7);
      ctx.lineTo(692.8, 37.7);
      ctx.lineTo(692.8, 39.8);
      ctx.lineTo(694.8, 39.8);
      ctx.lineTo(694.8, 40.9);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo

      // capa1/Grupo/Trazado
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(682.4, 21.6);
      ctx.bezierCurveTo(682.7, 20.9, 683.4, 20.5, 684.2, 20.5);
      ctx.bezierCurveTo(685.0, 20.5, 685.6, 20.9, 686.0, 21.6);
      ctx.lineTo(692.5, 21.6);
      ctx.bezierCurveTo(691.2, 19.5, 688.9, 18.2, 686.2, 18.2);
      ctx.bezierCurveTo(683.6, 18.2, 681.3, 19.5, 679.9, 21.6);
      ctx.lineTo(682.4, 21.6);
      ctx.closePath();
      ctx.fill();

      // capa1/Grupo/Trazado
      ctx.beginPath();
      ctx.moveTo(686.0, 23.7);
      ctx.bezierCurveTo(685.6, 24.3, 685.0, 24.7, 684.2, 24.7);
      ctx.bezierCurveTo(683.4, 24.7, 682.7, 24.3, 682.4, 23.7);
      ctx.lineTo(679.0, 23.7);
      ctx.bezierCurveTo(678.8, 24.3, 678.7, 25.0, 678.7, 25.7);
      ctx.bezierCurveTo(678.7, 29.9, 682.1, 33.3, 686.2, 33.3);
      ctx.bezierCurveTo(690.4, 33.3, 693.8, 29.9, 693.8, 25.7);
      ctx.bezierCurveTo(693.8, 25.0, 693.7, 24.3, 693.5, 23.7);
      ctx.lineTo(686.0, 23.7);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
}

function searchArticle(article)
{
      window.location = "search.html";
}

$(document).ready(function(){
      console.log("cargando...");
      $("#menu_mini").load("menu_mini.html");
      $("#menu-vertical").load("menu_lg.html");
});