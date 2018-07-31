import { ComicsCadastrarModule } from './comics-cadastrar.module';

describe('ComicsCadastrarModule', () => {
  let comicsCadastrarModule: ComicsCadastrarModule;

  beforeEach(() => {
    comicsCadastrarModule = new ComicsCadastrarModule();
  });

  it('should create an instance', () => {
    expect(comicsCadastrarModule).toBeTruthy();
  });
});
