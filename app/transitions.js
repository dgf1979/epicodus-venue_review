export default function(){
  this.transition(
    this.toRoute('venue'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.childOf('.liquid-ul'),
    this.use('toDown')
  );

  this.transition(
    this.hasClass('liquid-if'),
    this.toValue(true),
    this.use('toLeft')
  );

  this.transition(
    this.hasClass('liquid-if'),
    this.toValue(false),
    this.use('toRight')
  );
}
