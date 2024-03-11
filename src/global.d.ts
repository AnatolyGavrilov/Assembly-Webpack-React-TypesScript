declare module '*.module.scss' {
    interface IClassNames {
      [classNa: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }