# Moment_2


Här kommer några exempel på **automatiserings-processens** syfte:
* sammanslå flera och komprimera flera filers innehåll
* komprimera grafiska filer
* kopiera filer
* konventera innehåll i filer
* automatisk kvalitetskontroll av kod

För att automatisera mitt projekt har jag använt **Node.js**-open-source plattform, **NPM**-pakethanterare för Node.js, **GULP**-javascript-task runner(automatiserar uppgifter). 
Jag använder följande GULP-paket i automatisering av mitt projekt:
* gulp-concat  -sammanslår filer
* gulp-uglify  -komprimerar filer(js)
* gulp-clean-css  -komprimerar CSS filer
* gulp-watch  -bevakar filer

**Command Prompt**.
Mitt projekt finns att klona från följande adress <https://github.com/Tiia-Mai/Moment_2.git> Den innehåller "package.json" fil vilket gör att igenom "npm install" installeras alla filer/paket som behövs för att använda mitt projekt. Kommandot "gulp" startar alla automatiseringsprocesser.

För mitt projekt ingår följande gulp-tasks:
* copyhtml- flyttar HTML-filer till katalog "Pub"
* copyimages- flyttar bilder till katalog "Pub"
* concmincss- komprimerar och sammanslår filer och flyttar till katalog "Pub"
* concminjs- komprimerar och sammanslår filer och flyttar till katalog "Pub"
* watcher- bevakar ändringar i filer
* default- sammanslår alla "tasks" som du vill att Gulp ska köra / kallas med kommandot "gulp" i Command Prompt.




