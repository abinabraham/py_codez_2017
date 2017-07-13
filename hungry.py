print "I am hungry !!"


def arg_dec(operation):
    def wrapper(*args, **kwargs):
        for arg in args:

            if not isinstance(arg, int):
                raise ValueError('The arguments are not integers')
                break
        return operation(*args, **kwargs)

    return wrapper


@arg_dec
def sum(a, b):
    print a + b
    return a + b


sum(1,2)