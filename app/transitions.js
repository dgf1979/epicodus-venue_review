export default function(){
  this.transition(
    this.toRoute('venue'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
